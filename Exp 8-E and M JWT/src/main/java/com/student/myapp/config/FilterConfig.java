package com.student.myapp.config;

import com.student.myapp.util.JwtFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jakarta.servlet.Filter;

@Configuration
public class FilterConfig {

    @Bean
    public JwtFilter jwtFilter() {
        return new JwtFilter();
    }
}