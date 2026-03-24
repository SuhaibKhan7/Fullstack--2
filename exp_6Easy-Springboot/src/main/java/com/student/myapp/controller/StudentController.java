package com.student.myapp.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.student.myapp.model.Student;
import com.student.myapp.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @PostMapping
    public Student save(@RequestBody Student student) {
        return service.saveStudent(student);
    }

    @GetMapping
    public List<Student> getAll() {
        return service.getAllStudents();
    }
}