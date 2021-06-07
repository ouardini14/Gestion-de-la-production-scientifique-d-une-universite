package com.login.demo.Rep;

import com.login.demo.model.Professeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ProfesseurRepository extends JpaRepository<Professeur, Long>, JpaSpecificationExecutor<Professeur> {

    Professeur findProfesseurBynom(String name);


    Professeur findProfesseurByprofId(long id);

    Professeur findProfesseurBycin(String cin);
}