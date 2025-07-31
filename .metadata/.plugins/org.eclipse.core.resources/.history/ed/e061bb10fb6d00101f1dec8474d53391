package com.kh.notice_board.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.notice_board.repository.CommentDTO;
import com.kh.notice_board.service.CommentService;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
@Log4j2
public class CommentController {
	private final CommentService commentService;

	// 댓글 등록
	@PostMapping
	public ResponseEntity<Long> register(@RequestBody CommentDTO commentDTO) {
		log.info("Register Comment: {}", commentDTO);
		Long cno = commentService.register(commentDTO);
		return ResponseEntity.ok(cno);
	}

	// 게시글 별 댓글 조회
	@GetMapping("/{pno}")
	public ResponseEntity<List<CommentDTO>> getList(@PathVariable("pno") Long pno) {
		log.info("Get Comments for Post Pno: {}", pno);
		List<CommentDTO> list = commentService.getList(pno);
		return ResponseEntity.ok(list);
	}

	// 댓글 수정
	@PutMapping("/{cno}")
	public ResponseEntity<String> updateComment(@PathVariable Long cno, @RequestBody Map<String, String> body) {
		commentService.update(cno, body.get("content"));
		return ResponseEntity.ok("수정 완료");
	}

	// 댓글 삭제
	@DeleteMapping("/{cno}")
	public ResponseEntity<String> remove(@PathVariable("cno") Long cno) {
		log.info("Delete Comment Cno: {}", cno);
		commentService.remove(cno);
		return ResponseEntity.ok("success");
	}

}
