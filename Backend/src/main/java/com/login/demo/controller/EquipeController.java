package com.login.demo.controller;

import com.login.demo.Services.EquipeService;
import com.login.demo.model.Equipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/equipe")
public class EquipeController {
    private final EquipeService equipeservice;

    @Autowired
    public EquipeController(EquipeService equipeservice) {
        this.equipeservice = equipeservice;
    }

    @GetMapping("")
    public List<Equipe> Allequipes() {
        return equipeservice.getAllequipes();
    }

    @PostMapping("/add")
    public Boolean newequipe(@RequestBody Equipe equipe) {
        return equipeservice.createEquipe(equipe);
    }

    @GetMapping("/{equipeId}")
    public Equipe equipeByequipeId(@PathVariable long equipeId) {
        return equipeservice.findEquipeByequipeId(equipeId);
    }

    @GetMapping("/nom/{firstname}")
    public Equipe equipeByname(@PathVariable String firstname) {
        return equipeservice.findEquipeBynom(firstname);
    }



    @DeleteMapping("/delete/{equipeid}")
    public void deleteByequipe(@PathVariable long equipeid) {
        equipeservice.deleteEquipe(equipeservice.findEquipeByequipeId(equipeid));
    }
}