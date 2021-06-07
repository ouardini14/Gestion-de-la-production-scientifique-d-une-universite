package com.login.demo.Services;

import com.login.demo.Rep.PublicationRepository;
import com.login.demo.model.Doctorant;
import com.login.demo.model.Publication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublicationService {

    private final PublicationRepository publicationrep;

    public PublicationService(PublicationRepository publicationrep) {
        this.publicationrep = publicationrep;
    }

    public List<Publication> getAllPublications() {
        return publicationrep.findAll();
    }

    public Publication findPublicationBypublicationId(long id) {
        return publicationrep.findPublicationBypublicationId(id);
    }

    public List<Publication> findPublicationsByprofId(long id) {
        return publicationrep.findAllByprofId(id);
    }

    public boolean createPublication(Publication pu) {
        List<Publication> docs = publicationrep.findAll();
        for (Publication other : docs) {
            if (other.getTitre().toString().equals(pu.getTitre().toString())) {
                return false;

            }
        }
        publicationrep.save(pu);
        return true;
    }

    public boolean updatePublication(Publication pu) {
        List<Publication> docs = publicationrep.findAll();
        for (Publication other : docs) {
            if (other.getTitre().toString().equals(pu.getTitre().toString())) {
                if (!other.getPublicationId().equals(pu.getPublicationId())) {
                    return false;
                }

            }
        }
        publicationrep.save(pu);
        return true;
    }

    public Publication findPublicationByTitre(String name) {
        return publicationrep.findPublicationByTitre(name);
    }

    public void deletePublication(Publication pu) {
        publicationrep.delete(pu);
    }
}