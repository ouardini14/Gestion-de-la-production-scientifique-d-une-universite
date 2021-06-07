package com.login.demo.model;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "doctorant")
public class Doctorant implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "docid", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long docid;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "intitulethese")
    private String intituleThese;

    @Column(name = "directeurthese")
    private Long directeurThese;

    @Column(name = "codirecteur")
    private Long coDirecteur;

    @Column(name = "cotutelle")
    private Long cotutelle;

    @Column(name = "anneeinscriptiondate")
    private Date anneeInscriptiondate;

    @Column(name = "cin")
    private String cin;

    @Column(name = "passworddoctorant")
    private String passwordDoctorant;

    public Long getDocid() {
        return docid;
    }

    public void setDocid(Long docid) {
        this.docid = docid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Doctorant doctorant = (Doctorant) o;
        return Objects.equals(cin, doctorant.cin) && Objects.equals(passwordDoctorant, doctorant.passwordDoctorant);
    }

    @Override
    public int hashCode() {
        return Objects.hash(docid, nom, prenom, intituleThese, directeurThese, coDirecteur, cotutelle, anneeInscriptiondate, cin, passwordDoctorant);
    }

    @Override
    public String toString() {
        return "Doctorant{" +
                "docid=" + docid +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", intituleThese='" + intituleThese + '\'' +
                ", directeurThese=" + directeurThese +
                ", coDirecteur=" + coDirecteur +
                ", cotutelle=" + cotutelle +
                ", anneeInscriptiondate=" + anneeInscriptiondate +
                ", cin='" + cin + '\'' +
                ", passwordDoctorant='" + passwordDoctorant + '\'' +
                '}';
    }
}
