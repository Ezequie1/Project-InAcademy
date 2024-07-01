package project.in_academy.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.in_academy.model.enums.Categories;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String courseId;
    @NotNull
    private String title;
    @NotNull
    private String description;
    @NotNull
    private String authorName;
    private int coursePoints;
    private int totalHours;
    @Max(5)
    private int rating;
    @Enumerated(EnumType.STRING)
    private Categories category;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate creationDate;
    @OneToMany(mappedBy = "courseId")
    private List<Enrollments> enrolledStudents;
    @OneToMany(mappedBy = "courseId")
    private List<Chapter> contents;
    @OneToMany(mappedBy = "courseId")
    private List<Comments> comments;
    @JsonIgnore
    @OneToMany(mappedBy = "courseId")
    private List<Favorites> favorites;
}
