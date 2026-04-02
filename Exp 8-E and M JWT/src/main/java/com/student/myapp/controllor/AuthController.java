package com.student.myapp.controllor;

import com.student.myapp.dto.LoginRequest;
import com.student.myapp.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginRequest request) {

        String username = request.getUsername().trim();
        String password = request.getPassword().trim();

        System.out.println("U: [" + username + "]");
        System.out.println("P: [" + password + "]");

        Map<String, String> res = new HashMap<>();


        if ("admin".equals(username) && "1234".equals(password)) {
            String token = JwtUtil.generateToken(username);
            res.put("token", token);
            return res;
        }


        res.put("error", "Invalid credentials");
        return res;
    }


    @GetMapping("/hello")
    public String hello(HttpServletRequest request) {
        String user = (String) request.getAttribute("username");
        return "Hello " + user;
    }
}