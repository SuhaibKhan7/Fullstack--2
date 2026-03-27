package com.student.myapp.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentDTO {

    @NotNull(message = "Name cannot be null")
    @Size(min = 2, max = 50, message = "Name must be 2-50 characters")
    private String name;

    @NotNull(message = "Course cannot be null")
    @Size(min = 2, max = 50, message = "Course must be 2-50 characters")
    private String course;

    @NotNull(message = "Marks cannot be null")
    private Integer marks;

    public void setName(String name) {
        this.name = name;
    }

    public void setCourse(String course) {
        this.course = course;
    }
    public void setMarks(Integer marks) {
        this.marks = marks;
    }



    public String getName() {
     return name;
    }

    public String getCourse() {
        return course;
    }
    public int getMarks() {
        return marks;
    }
}