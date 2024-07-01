package project.in_academy.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.in_academy.model.enums.Progress;

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
    private Course courseId;
    @ManyToOne
    @JoinColumn(name = "userId")
    private User userId;
    private Progress progress;

}
