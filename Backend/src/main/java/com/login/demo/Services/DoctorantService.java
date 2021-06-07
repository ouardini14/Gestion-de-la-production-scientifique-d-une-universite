package com.login.demo.Services;

import com.login.demo.Rep.DoctorantRepository;
import com.login.demo.model.Doctorant;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorantService {

    private final DoctorantRepository doctorantrep;


    public DoctorantService(DoctorantRepository doctorantrep) {
        this.doctorantrep = doctorantrep;
    }

    public List<Doctorant> getAllusers(){

        return doctorantrep.findAll();
    }

    public Doctorant findDoctorantBydocId(long id){
    return doctorantrep.findDoctorantBydocid(id);
    }

    public boolean createDoc(Doctorant doc){
        List<Doctorant> docs = doctorantrep.findAll();
        for (Doctorant other : docs) {
            if (other.getCin().toString().equals(doc.getCin().toString())) {
                    return false;

            }
        }
       doctorantrep.save(doc);
        return true;



    }

    public boolean updateDoc(Doctorant doc){
        List<Doctorant> docs = doctorantrep.findAll();
        for (Doctorant other : docs) {
            if (other.getCin().toString().equals(doc.getCin().toString())) {
                if (!other.getDocid().equals(doc.getDocid())) {
                    return false;
                }

            }
        }
      doctorantrep.save(doc);
        return true;
    }


    public Doctorant findUserByfirstname(String name){
        return doctorantrep.findDoctorantBynom(name);
    }

    public Doctorant findDoctorantBycin(String cin){
        return doctorantrep.findDoctorantBycin(cin);
    }


    public  void deleteDoctorantBydoc(Doctorant doc){  doctorantrep.delete(doc);}



    public  boolean loginDoctorant(Doctorant doc){

        List<Doctorant> docs = doctorantrep.findAll();
        for (Doctorant other : docs) {
            if (other.equals(doc)) {

                return true;
            }
        }
        return false;
    }


    }



