package com.login.demo.Rep;

import com.login.demo.model.Publication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface PublicationRepository extends JpaRepository<Publication, Long>, JpaSpecificationExecutor<Publication> {

    Publication findPublicationBypublicationId(long id);

    Publication findPublicationByTitre(String Titre);

    List<Publication> findAllByprofId(long id);
}