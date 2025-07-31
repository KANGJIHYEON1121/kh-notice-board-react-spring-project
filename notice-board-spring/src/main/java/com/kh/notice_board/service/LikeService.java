package com.kh.notice_board.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kh.notice_board.domain.Like;
import com.kh.notice_board.domain.Post;
import com.kh.notice_board.repository.LikeRepository;
import com.kh.notice_board.repository.PostRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LikeService {
	private final LikeRepository likeRepository;
	private final PostRepository postRepository;

	@Transactional
	public boolean toggleLike(Long pno, String userId) {
		Post post = postRepository.findById(pno).orElseThrow(() -> new IllegalArgumentException("Post not found"));

		// 좋아요 여부 확인
		return likeRepository.findByUserIdAndPost(userId, post).map(existingLike -> {
			likeRepository.delete(existingLike);
			post.decreaseLikeCount();
			return false; // 좋아요 취소됨
		}).orElseGet(() -> {
			likeRepository.save(Like.builder().userId(userId).post(post).build());
			post.increaseLikeCount();
			return true; // 좋아요 등록됨
		});
	}

	public boolean isLiked(Long pno, String userId) {
		Post post = postRepository.findById(pno).orElseThrow(() -> new IllegalArgumentException("Post not found"));

		return likeRepository.findByUserIdAndPost(userId, post).isPresent();
	}

	public Long getLikeCount(Long pno) {
		Post post = postRepository.findById(pno).orElseThrow(() -> new IllegalArgumentException("Post not found"));

		return likeRepository.countByPost(post);
	}
}
