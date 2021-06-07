package com.login.demo.Services;

import com.login.demo.Rep.EquipeRepository;
import com.login.demo.model.Doctorant;
import com.login.demo.model.Equipe;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipeService {

    private final EquipeRepository equiperep;


    public EquipeService(EquipeRepository equiperep) {
        this.equiperep = equiperep;
    }

    public List<Equipe> getAllequipes(){

        return equiperep.findAll();
    }

    public Equipe findEquipeByequipeId(long id){
        return equiperep.findEquipeByequipeId(id);
    }

    public Boolean createEquipe(Equipe eq){
        List<Equipe> equs = equiperep.findAll();
        for (Equipe other : equs) {
            if (other.getNom().equals(eq.getNom())) {
                return false;
            }
        }
        equiperep.save(eq);
        return true;


    }

    public Equipe findEquipeBynom(String name){
        return equiperep.findEquipeBynom(name);
    }

    public  void deleteEquipe(Equipe eq){  equiperep.delete(eq);}





}
