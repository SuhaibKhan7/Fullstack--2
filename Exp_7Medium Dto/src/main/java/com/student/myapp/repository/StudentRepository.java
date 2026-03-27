package com.student.myapp.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.student.myapp.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}