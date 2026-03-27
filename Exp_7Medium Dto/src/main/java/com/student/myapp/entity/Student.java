package com.student.myapp.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String course;

    private int marks;


    public String getName() {
        return name;
    }

    public String getCourse() {
        return course;
    }

    public Integer getMarks() {
        return marks;
    }


    public void setName(String name) {
        this.name = name;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public void setMarks(Integer marks) {
        this.marks = marks;
    }
}