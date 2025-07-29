package com.kh.notice_board.service;

import java.util.List;

import com.kh.notice_board.dto.PageRequestDTO;
import com.kh.notice_board.dto.PageResponseDTO;
import com.kh.notice_board.dto.PostDTO;

import jakarta.transaction.Transactional;

@Transactional
public interface PostService {
	Long register(PostDTO postDTO);

	PostDTO get(Long pno);

	void modify(PostDTO postDTO);

	void remove(Long pno);
	
	PageResponseDTO<PostDTO> list(PageRequestDTO pageRequestDTO);
	
	PageResponseDTO<PostDTO> getMyPosts(PageRequestDTO pageRequestDTO, String writer);
	
	public List<PostDTO> getAllPosts();
}
