package project.in_academy.infra.cors.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Chapter {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String chapterId;
    private String title;
    @ManyToOne
    @JoinColumn(name = "courseId")
    private Course courseId;
    @OneToMany(mappedBy = "chapterId")
    private List<Class> classContents;
}
