package project.in_academy.infra.cors.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.in_academy.infra.cors.model.enums.Progress;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Enrollments {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String enrollmentId;
    @ManyToOne
    @JoinColumn(name = "enrolledStudents")
    @JsonManagedReference
    private Course courseId;
    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonManagedReference
    private User userId;
    private Progress progress;

    public Enrollments(User userId, Course courseId, Progress progress) {
        this.userId = userId;
        this.courseId = courseId;
        this.progress = progress;
    }
}
