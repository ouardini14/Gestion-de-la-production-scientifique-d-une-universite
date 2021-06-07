package com.login.demo.Rep;

import com.login.demo.model.Doctorant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DoctorantRepository extends JpaRepository<Doctorant, Long>, JpaSpecificationExecutor<Doctorant> {
    Doctorant findDoctorantBydocid(long id);

    Doctorant findDoctorantBynom(String name);

    Doctorant findDoctorantBycin(String cin);
}