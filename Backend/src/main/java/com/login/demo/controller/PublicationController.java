package com.login.demo.controller;

import com.login.demo.Services.PublicationService;
import com.login.demo.model.Publication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/publication")
public class PublicationController {
    private final PublicationService Publicationservice;

    @Autowired
    public PublicationController(PublicationService Publicationservice) {
        this.Publicationservice = Publicationservice;
    }

    @GetMapping("")
    public List<Publication> AllPublications() {
        return Publicationservice.getAllPublications();
    }

    @PostMapping("/add")
    public boolean newPublication(@RequestBody Publication Publication) {
        return Publicationservice.createPublication(Publication);
    }

    @PutMapping("/update")
    public boolean updatePublication(@RequestBody Publication Publication) {
        return Publicationservice.updatePublication(Publication);
    }

    @GetMapping("/{PublicationId}")
    public Publication PublicationByPublicationId(@PathVariable long PublicationId) {
        return Publicationservice.findPublicationBypublicationId(PublicationId);
    }

    @GetMapping("all/{profId}")
    public List<Publication> PublicationByprofId(@PathVariable long profId) {
        return Publicationservice.findPublicationsByprofId(profId);
    }

    @GetMapping("/nom/{firstname}")
    public Publication PublicationByname(@PathVariable String firstname) {
        return Publicationservice.findPublicationByTitre(firstname);
    }

    @DeleteMapping("/delete/{Publicationid}")
    public void deleteByPublication(@PathVariable long Publicationid) {
        Publicationservice.deletePublication(Publicationservice.findPublicationBypublicationId(Publicationid));
    }
}