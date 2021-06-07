package com.login.demo.model;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "labo")
public class Labo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "laboid", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long laboId;

    @Column(name = "nom")
    private String nom;


    @Column(name = "responsable")
    private Long responsable;
    @Column(name = "etablissement")
    private String etablissement;
    @Column(name = "univ")
    private String univ;

}
