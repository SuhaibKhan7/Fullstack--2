package com.student.myapp.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.student.myapp.repository.StudentRepository;
import  com.student.myapp.model.Student;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }
}