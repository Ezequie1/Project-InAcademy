package project.in_academy.infra.cors.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.in_academy.infra.cors.model.enums.Progress;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClassProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String cardProgressId;
    @ManyToOne
    @JoinColumn(name = "classId")
    private Class classId;
    @ManyToOne
    @JoinColumn(name = "progress_class")
    private User userId;
    private Progress progress;
    private int lastSecondWatched;
}
