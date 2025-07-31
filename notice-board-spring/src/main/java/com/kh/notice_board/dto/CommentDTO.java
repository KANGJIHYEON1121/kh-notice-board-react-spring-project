package com.kh.notice_board.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentDTO {
	private Long cno;
	private Long postPno;
	private String writer;
	private String content;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate regDate;
	
}
