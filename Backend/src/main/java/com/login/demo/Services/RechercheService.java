package com.login.demo.Services;

import com.login.demo.Rep.RechercheRepository;
import com.login.demo.model.Recherche;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RechercheService {

    private  final RechercheRepository rechercherep;

    public RechercheService(RechercheRepository rechercherep) {
        this.rechercherep = rechercherep;
    }

    public List<Recherche> getAllRecherches() {
        return rechercherep.findAll();
    }

    public Recherche findRechercheByrechercheId(long id) {
        return rechercherep.findRechercheByrechercheId(id);
    }

    public List<Recherche> findAllRecherchesBydocId(long id) {
        return rechercherep.findAllBydocId(id);
    }

    public Recherche createRecherche(Recherche re) {
        return rechercherep.save(re);
    }

    public Recherche findRechercheByTitre(String name) {
        return rechercherep.findRechercheByTitre(name);
    }

    public void deleteRecherche(Recherche re) {
        rechercherep.delete(re);
    }
}