package com.student.myapp.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.security.Key;

public class JwtFilter implements Filter {

    private static final Key key =
            Keys.hmacShaKeyFor("mysecretkeymysecretkeymysecretkey12".getBytes());

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        String path = req.getRequestURI();

        // allow login
        if (path.contains("/auth/login")) {
            chain.doFilter(request, response);
            return;
        }

        String header = req.getHeader("Authorization");

        if (header == null || !header.startsWith("Bearer ")) {
            res.setStatus(401);
            res.getWriter().write("Missing Token");
            return;
        }

        String token = header.substring(7);

        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            req.setAttribute("username", claims.getSubject());

        } catch (Exception e) {
            e.printStackTrace();
            res.setStatus(401);
            res.getWriter().write("Invalid Token");
            return;
        }

        chain.doFilter(request, response);
    }
}