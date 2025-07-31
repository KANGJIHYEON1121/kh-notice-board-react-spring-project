package com.kh.notice_board.filter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import org.springframework.web.filter.OncePerRequestFilter;

import com.google.gson.Gson;
import com.kh.notice_board.util.JWTUtil;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class JWTCheckFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		log.info("-------------------- JWTCheckFilter ------------------------------------------------------");
		String authHeaderStr = request.getHeader("Authorization");
		try {
			// Bearer accestoken ............... 토큰이 정상적이면 그대로 요구사항진행
			String accessToken = authHeaderStr.substring(7);
			Map<String, Object> claims = JWTUtil.validateToken(accessToken);
			log.info("JWT claims: " + claims);
			filterChain.doFilter(request, response);
		} catch (Exception e) {
			log.error("JWT Check Error ....................................");
			log.error(e.getMessage());
			Gson gson = new Gson();
			String msg = gson.toJson(Map.of("error", "ERROR_ACCESS_TOKEN"));
			response.setContentType("application/json");
			PrintWriter printWriter = response.getWriter();
			printWriter.println(msg);
			printWriter.close();
		}
	}

	@Override
	protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
		// Preflight (지금 보내는 요청이 유효한지를 확인하기 위해 OPTIONS
		// 메서드로 예비 요청을 보내는 것
		if (request.getMethod().equals("OPTIONS")) {
			return true;
		}

		String path = request.getRequestURI();
		log.info("check uri. .............." + path);
		// api/member/ 경로의 호출은 체크하지 않음
		if (path.startsWith("/api/member/")) {
			return true;
		}

		// 이미지 조회 경로는 체크하지 않하고 싶을 때
		if (path.startsWith("/api/post/list/")) {
			return true;
		}
		return false;
	}

}
