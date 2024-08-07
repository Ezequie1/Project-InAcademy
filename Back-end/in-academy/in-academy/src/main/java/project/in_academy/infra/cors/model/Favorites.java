package project.in_academy.infra.cors.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Favorites {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String favoriteId;
    @ManyToOne
    @JoinColumn(name = "favoritesCourses")
    @JsonManagedReference
    private Course courseId;
    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonManagedReference
    private User userId;

    public Favorites(Course courseId, User userId) {
        this.courseId = courseId;
        this.userId = userId;
    }
}
