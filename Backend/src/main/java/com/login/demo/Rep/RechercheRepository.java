package com.login.demo.Rep;

import com.login.demo.model.Recherche;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface RechercheRepository extends JpaRepository<Recherche, Long>, JpaSpecificationExecutor<Recherche> {

    Recherche findRechercheByrechercheId(long id);

    Recherche findRechercheByTitre(String Titre);

    List<Recherche> findAllBydocId(long id);
}