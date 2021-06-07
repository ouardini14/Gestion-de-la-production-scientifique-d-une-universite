package com.login.demo.Rep;

import com.login.demo.model.Equipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface EquipeRepository extends JpaRepository<Equipe, Long>, JpaSpecificationExecutor<Equipe> {

    Equipe findEquipeByequipeId(long id);

    Equipe findEquipeBynom(String name);

}