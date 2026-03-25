package com.student.myapp.controller;



import com.student.myapp.dto.StudentDTO;
import com.student.myapp.entity.Student;
import com.student.myapp.service.StudentService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    // ✅ CREATE Student
    @PostMapping
    public Student create(@Valid @RequestBody StudentDTO dto) {
        return service.createStudent(dto);
    }

    // ✅ GET BY ID
    @GetMapping("/{id}")
    public Student getById(@PathVariable Long id) {
        return service.getById(id);
    }
}
