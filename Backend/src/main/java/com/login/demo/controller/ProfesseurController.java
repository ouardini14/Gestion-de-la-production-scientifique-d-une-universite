package com.login.demo.controller;

import com.login.demo.Services.ProfesseurService;
import com.login.demo.model.Doctorant;
import com.login.demo.model.Professeur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/professeur")
public class ProfesseurController {
    private final ProfesseurService Professeurservice;

    @Autowired
    public ProfesseurController(ProfesseurService Professeurservice) {
        this.Professeurservice = Professeurservice;
    }

    @GetMapping("")
    public List<Professeur> Allprofesseurs() {
        return Professeurservice.getAllprofesseurs();
    }

    @PostMapping("/add")
    public boolean newProfesseur(@RequestBody Professeur Professeur) {
        return Professeurservice.createProfesseur(Professeur);
    }

    @PutMapping("/update")
    public boolean editProfesseur(@RequestBody Professeur Professeur) {
        return Professeurservice.updateProfesseur(Professeur);
    }

    @GetMapping("/{ProfesseurId}")
    public Professeur findDoctorantByprofId(@PathVariable long ProfesseurId) {
        return Professeurservice.findProfesseurByprofId(ProfesseurId);
    }

    @GetMapping("/nom/{firstname}")
    public Professeur ProfesseurByname(@PathVariable String firstname) {
        return Professeurservice.findProfesseurBynom(firstname);
    }

    @GetMapping("/cin/{cin}")
    public Professeur profBycin(@PathVariable String cin){
        return Professeurservice.findProfesseurBycin(cin);
    }

    @DeleteMapping("/delete/{Professeurid}")
    public void deleteByProfesseur(@PathVariable long Professeurid) {
        Professeurservice.deleteProfesseur(Professeurservice.findProfesseurByprofId(Professeurid));
    }

    @PostMapping("/login")
    public boolean loginProfesseur(@RequestBody Professeur prof) {
        return Professeurservice.loginProfesseur(prof);
    }
}