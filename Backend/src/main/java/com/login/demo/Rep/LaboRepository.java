package com.login.demo.Rep;

import com.login.demo.model.Labo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface LaboRepository extends JpaRepository<Labo, Long>, JpaSpecificationExecutor<Labo> {

    Labo findLaboBynom(String name);

    Labo findLaboBylaboId(long id);
}