package com.login.demo.model;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "recherche")
public class Recherche implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "rechercheid", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rechercheId;

    @Column(name = "titre")
    private String titre;

    @Column(name = "datecreation")
    private Date dateCreation;

    @Column(name = "dateupdate")
    private Date dateUpdate;

    @Column(name = "docid")
    private Long docId;
    @Column(name = "statu")
    private String statu;

}
