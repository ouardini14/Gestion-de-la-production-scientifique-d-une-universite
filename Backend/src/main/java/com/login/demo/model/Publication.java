package com.login.demo.model;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "publication")
public class Publication implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "publicationid", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long publicationId;

    @Column(name = "titre")
    private String titre;

    @Column(name = "datepublication")
    private Date datePublication;

    @Column(name = "indextype")
    private Boolean indexType;

    @Column(name = "profid")
    private Long profId;

}
