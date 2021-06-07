package com.login.demo.Services;
import com.login.demo.Rep.ProfesseurRepository;
import com.login.demo.model.Doctorant;
import com.login.demo.model.Professeur;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfesseurService {

    private final ProfesseurRepository professeurrep;


    public ProfesseurService(ProfesseurRepository professeurrep) {
        this.professeurrep = professeurrep;
    }

    public List<Professeur> getAllprofesseurs(){

        return professeurrep.findAll();
    }

    public Professeur findProfesseurByprofId(long id){
        return professeurrep.findProfesseurByprofId(id);
    }

    public boolean createProfesseur(Professeur prof){

        List<Professeur> profs = professeurrep.findAll();
        for (Professeur other : profs) {
            if (other.getCin().toString().equals(prof.getCin().toString())) {
                    return false;
            }
        }
        professeurrep.save(prof);
        return true;

    }

    public boolean updateProfesseur(Professeur prof){
        List<Professeur> profs = professeurrep.findAll();
        for (Professeur other : profs) {
            if (other.getCin().toString().equals(prof.getCin().toString())) {
                if (!other.getProfId().equals(prof.getProfId())) {
                    return false;
                }

            }
        }
        professeurrep.save(prof);
        return true;
    }

    public Professeur findProfesseurBynom(String name){
        return professeurrep.findProfesseurBynom(name);
    }

    public Professeur findProfesseurBycin(String cin){
        return professeurrep.findProfesseurBycin(cin);
    }

    public  void deleteProfesseur(Professeur pr){  professeurrep.delete(pr);}

    public  boolean loginProfesseur(Professeur prof){

        List<Professeur> profs = professeurrep.findAll();
        for (Professeur other : profs) {
            if (other.equals(prof)) {

                return true;
            }
        }
        return false;
    }





}
