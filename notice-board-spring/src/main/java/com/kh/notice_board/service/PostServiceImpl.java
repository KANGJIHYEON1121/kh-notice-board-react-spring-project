package com.kh.notice_board.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.kh.notice_board.domain.Post;
import com.kh.notice_board.domain.PostImage;
import com.kh.notice_board.dto.PageRequestDTO;
import com.kh.notice_board.dto.PageResponseDTO;
import com.kh.notice_board.dto.PostDTO;
import com.kh.notice_board.repository.PostRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Transactional
@Log4j2
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
	// 자동주입 대상은 final 선언
	private final ModelMapper modelMapper;
	private final PostRepository postRepository;

	@Override
	public Long register(PostDTO postDTO) {
		Post post = dtoToEntity(postDTO);
		Post result = postRepository.save(post);
		return result.getPno();
	}

	private Post dtoToEntity(PostDTO postDTO) {
		Post post = Post.builder().pno(postDTO.getPno()).content(postDTO.getContent()).writer(postDTO.getWriter())
				.likeCount(postDTO.getLikeCount()).dueDate(postDTO.getDueDate()).delFlag(postDTO.isDelFlag()).build();

		// 업로드된 파일 이름 리스트
		List<String> uploadFileNames = postDTO.getUploadPostImage();
		if (uploadFileNames == null) {
			return post;
		}
		uploadFileNames.forEach(uploadName -> {
			post.addImageString(uploadName);
		});
		return post;
	}

	@Override
	public void modify(PostDTO postDTO) {
		// 1. read
		Optional<Post> result = postRepository.findById(postDTO.getPno());
		Post post = result.orElseThrow();

		// content, writer, likeCount 등 필요한 필드 변경
		post.changeContent(postDTO.getContent());

		// 파일(이미지) 리스트 먼저 클리어
		post.clearList();

		// 업로드 파일명 리스트 적용
		List<String> uploadFileNames = postDTO.getUploadPostImage(); // postDTO 필드명 확인!
		if (uploadFileNames != null && !uploadFileNames.isEmpty()) {
			uploadFileNames.forEach(uploadName -> {
				post.addImageString(uploadName); // Post 엔티티에 맞는 메서드명 사용
			});
		}

		postRepository.save(post);
	}

	@Override
	public void remove(Long pno) {
		postRepository.updateToDelete(pno, true);
	}

	@Override
	public PageResponseDTO<PostDTO> list(PageRequestDTO pageRequestDTO) {
		Pageable pageable = PageRequest.of(pageRequestDTO.getPage() - 1, pageRequestDTO.getSize(),
				Sort.by("pno").descending());

		// 반드시 이 메서드 사용
		Page<Post> result = postRepository.findAllWithImages(pageable); // ✅ 반드시 이걸 써야 imageList 딸려옴!

		List<PostDTO> ptoList = result.getContent().stream().map(this::entityToDTO).collect(Collectors.toList());

		long totalCount = result.getTotalElements();

		result.getContent().forEach(post -> {
			System.out.println(">>>> Post: " + post.getPno());
			System.out.println(">>>> Images: " + post.getImageList());
		});

		return PageResponseDTO.<PostDTO>withAll().ptoList(ptoList).pageRequestDTO(pageRequestDTO).totalCount(totalCount)
				.build();
	}

	@Override
	public PageResponseDTO<PostDTO> getMyPosts(PageRequestDTO pageRequestDTO, String writer) {
		Pageable pageable = PageRequest.of(pageRequestDTO.getPage() <= 0 ? 0 : pageRequestDTO.getPage() - 1,
				pageRequestDTO.getSize(), Sort.by("pno").descending());

		// 반드시 EntityGraph가 적용된 findByWriter 메서드 사용
		Page<Post> result = postRepository.findByWriterAndNotDeleted(writer, pageable);

		// ❗ entityToDTO()를 사용해서 이미지까지 포함된 DTO로 변환
		List<PostDTO> ptoList = result.getContent().stream().map(this::entityToDTO).collect(Collectors.toList());

		return PageResponseDTO.<PostDTO>builder().ptoList(ptoList).totalPage(result.getTotalPages())
				.totalCount((int) result.getTotalElements()).pageRequestDTO(pageRequestDTO)
				.current(pageRequestDTO.getPage()).build();
	}

	@Override
	public List<PostDTO> getAllPosts() {
		List<Post> result = postRepository.findAllNotDeleted(); 
		return result.stream().map(this::entityToDTO).collect(Collectors.toList());
	}

	@Override
	public PostDTO get(Long pno) {
		java.util.Optional<Post> result = postRepository.selectOne(pno);
		Post post = result.orElseThrow();
		PostDTO postDTO = entityToDTO(post);
		return postDTO;
	}

	private PostDTO entityToDTO(Post post) {
		PostDTO postDTO = PostDTO.builder().pno(post.getPno()).content(post.getContent()).writer(post.getWriter())
				.likeCount(post.getLikeCount()).delFlag(post.isDelFlag()).dueDate(post.getDueDate()).build();

		// 이미지 파일명 리스트 셋팅
		List<PostImage> imageList = post.getImageList();
		if (imageList != null && !imageList.isEmpty()) {
			List<String> fileNameList = imageList.stream().map(postImage -> postImage.getFileName()).toList();
			postDTO.setUploadPostImage(fileNameList); // DTO에 fileNames 필드가 있다면!
		}

		return postDTO;
	}

}
