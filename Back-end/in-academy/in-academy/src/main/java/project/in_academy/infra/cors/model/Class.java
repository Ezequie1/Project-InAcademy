package project.in_academy.infra.cors.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import project.in_academy.infra.cors.model.enums.ClassType;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Class {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String classId;
    @NotNull
    private String title;
    @NotNull
    private String text;
    private String urlVideo;
    @Enumerated(EnumType.STRING)
    private ClassType classType;
    @ManyToOne
    @JoinColumn(name = "chapterId")
    private Chapter chapterId;
    @OneToMany(mappedBy = "classId")
    List<ClassProgress> progress;

}
