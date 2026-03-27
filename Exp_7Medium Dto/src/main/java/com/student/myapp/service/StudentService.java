package com.student.myapp.service;

import com.student.myapp.dto.StudentDTO;
import com.student.myapp.repository.StudentRepository;
import com.student.myapp.entity.Student;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    public StudentRepository repo;
    public StudentService(StudentRepository repo) {
        this.repo = repo;
    }

    public Student createStudent(StudentDTO dto) {
        Student student = new Student();
        student.setName(dto.getName());
        student.setCourse(dto.getCourse());
        student.setMarks(dto.getMarks());

        return repo.save(student);
    }

    public Student getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }
}
