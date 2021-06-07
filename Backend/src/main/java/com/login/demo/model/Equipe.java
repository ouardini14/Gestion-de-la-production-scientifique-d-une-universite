package com.login.demo.model;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "equipe")
public class Equipe implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "equipeid", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long equipeId;

    @Column(name = "nom")
    private String nom;

    @Column(name = "laboid")
    private Long laboId;

}
