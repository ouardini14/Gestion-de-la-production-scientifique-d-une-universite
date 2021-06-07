package com.login.demo.Services;
import com.login.demo.model.Equipe;
import com.login.demo.model.Labo;
import com.login.demo.Rep.LaboRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaboService {


    private final  LaboRepository laborep;


    public  LaboService( LaboRepository laborep) {
        this.laborep = laborep;
    }

    public List< Labo> getAlllabos(){

        return laborep.findAll();
    }

    public  Labo findLaboBylaboId(long id){
        return laborep.findLaboBylaboId(id);
    }

    public  boolean createLabo( Labo la){
        List<Labo> las = laborep.findAll();
        for (Labo other : las) {
            if (other.getNom().equals(la.getNom()) && other.getResponsable().equals(la.getResponsable()) &&other.getEtablissement().equals(la.getEtablissement()) && other.getUniv().equals(la.getUniv())) {

                return false;
            }
        }
       laborep.save(la);
        return true;

    }

    public  Labo findLaboByname(String name){
        return laborep.findLaboBynom(name);
    }

    public  void deleteLabo( Labo la){  laborep.delete(la);}





}
