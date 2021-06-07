package com.login.demo.controller;


import com.login.demo.Services.DoctorantService;
import com.login.demo.model.Doctorant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/doctorant")
public class DoctorantController {

    private final DoctorantService docservice;
    @Autowired
    public DoctorantController(DoctorantService docservice) {
        this.docservice = docservice;
    }

    @GetMapping("")
    public List<Doctorant>  Allusers(){
        return docservice.getAllusers();
    }

    @PostMapping("/add")
    public boolean newDoc(@RequestBody Doctorant doc) {
        return docservice.createDoc(doc);
    }

    @PutMapping("/update")
    public boolean editDoc(@RequestBody Doctorant doc) {

        return docservice.updateDoc(doc);
    }

   @GetMapping("/{docId}")
    public Doctorant docBydocId(@PathVariable long docId){
        return docservice.findDoctorantBydocId(docId);
    }

    @GetMapping("/nom/{firstname}")
    public Doctorant  docByname(@PathVariable String firstname){
        return docservice.findUserByfirstname(firstname);
    }

    @GetMapping("/cin/{cin}")
    public Doctorant  docBycin(@PathVariable String cin){
        return docservice.findDoctorantBycin(cin);
    }

    @DeleteMapping("/delete/{docid}")
    public void deleteBydoc(@PathVariable long docid){

         docservice.deleteDoctorantBydoc(docservice.findDoctorantBydocId(docid));
    }
    @PostMapping("/login")
    public boolean loginDoctorant( @RequestBody Doctorant doc) {
      return docservice.loginDoctorant(doc);
    }
}
