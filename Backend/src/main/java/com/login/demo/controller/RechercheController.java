package com.login.demo.controller;

import com.login.demo.Services.RechercheService;
import com.login.demo.model.Recherche;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/recherche")
public class RechercheController {
    private final RechercheService Rechercheservice;

    @Autowired
    public RechercheController(RechercheService Rechercheservice) {
        this.Rechercheservice = Rechercheservice;
    }

    @GetMapping("")
    public List<Recherche> AllRecherches() {
        return Rechercheservice.getAllRecherches();
    }

    @PostMapping("/add")
    public Recherche newRecherche(@RequestBody Recherche Recherche) {
        return Rechercheservice.createRecherche(Recherche);
    }

    @GetMapping("/{RechercheId}")
    public Recherche RechercheByRechercheId(@PathVariable long RechercheId) {
        return Rechercheservice.findRechercheByrechercheId(RechercheId);
    }

    @GetMapping("all/{docid}")
    public List<Recherche>  RechercheBydocid(@PathVariable long docid) {
        return Rechercheservice.findAllRecherchesBydocId(docid);
    }

    @GetMapping("/nom/{firstname}")
    public Recherche RechercheByname(@PathVariable String firstname) {
        return Rechercheservice.findRechercheByTitre(firstname);
    }

    @DeleteMapping("/delete/{Rechercheid}")
    public void deleteByRecherche(@PathVariable long Rechercheid) {
        Rechercheservice.deleteRecherche(Rechercheservice.findRechercheByrechercheId(Rechercheid));
    }
}