package com.login.demo.controller;

import com.login.demo.Services.LaboService;
import com.login.demo.model.Labo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/labo")
public class LaboController {
    private final LaboService Laboservice;

    @Autowired
    public LaboController(LaboService Laboservice) {
        this.Laboservice = Laboservice;
    }

    @GetMapping("")
    public List<Labo> AllLabos() {
        return Laboservice.getAlllabos();
    }

    @PostMapping("/add")
    public boolean newLabo(@RequestBody Labo Labo) {
        return Laboservice.createLabo(Labo);
    }

    @GetMapping("/{LaboId}")
    public Labo LaboByLaboId(@PathVariable long LaboId) {
        return Laboservice.findLaboBylaboId(LaboId);
    }

    @GetMapping("/nom/{firstname}")
    public Labo LaboByname(@PathVariable String firstname) {
        return Laboservice.findLaboByname(firstname);
    }

    @DeleteMapping("/delete/{Laboid}")
    public void deleteByLabo(@PathVariable long Laboid) {
        Laboservice.deleteLabo(Laboservice.findLaboBylaboId(Laboid));
    }
}