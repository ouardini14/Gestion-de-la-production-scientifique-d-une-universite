package com.login.demo.model;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "professeur")
public class Professeur implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "profid", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long profId;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "email")
    private String email;

    @Column(name = "grade")
    private String grade;

    @Column(name = "cin")
    private String cin;

    @Column(name = "equipeid")
    private Long equipeId;

    @Column(name = "passwordprof")
    private String passwordProf;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Professeur that = (Professeur) o;
        return Objects.equals(cin, that.cin) &&  Objects.equals(passwordProf, that.passwordProf);
    }

    @Override
    public int hashCode() {
        return Objects.hash(profId, nom, prenom, email, grade, cin, equipeId, passwordProf);
    }
}
