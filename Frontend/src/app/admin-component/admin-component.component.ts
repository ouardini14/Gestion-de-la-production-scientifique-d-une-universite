import { Component, ElementRef, OnInit } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import  * as $ from "jquery";
import { ViewChild } from '@angular/core';
import { AuthentificationService } from 'app/service/authentification.service';
import { Router } from '@angular/router';
import { doctorant } from 'app/models/doctrorant';
import { professeur } from 'app/models/professeur';
import { DoctorantService } from 'app/service/modelServices/doctorant.service';
import { ProfesseurService } from 'app/service/modelServices/professeur.service';
import { EquipeService } from 'app/service/modelServices/equipe.service';
import { equipe } from 'app/models/equipe';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { FormGroupDirective, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new ErrorStateMatcher();
  
  constructor(private router: Router,
    private eqService:EquipeService,
    private notification:NotificationsComponent,

    private loginservice: AuthentificationService,private docService:DoctorantService,private profService:ProfesseurService) {

      this.filteredEquipes = this.EquipeCtrl.valueChanges.pipe( 
        startWith(''),
        map(state => state ? this._filterEquipes(state) : this.equipes.slice())
      );

      this.filteredProfesseurs = this.DiresCtrl.valueChanges.pipe(    
        startWith(''),
        map(state => state ? this._filterProfesseurs(state) : this.professeurs.slice())
      );

      this.filteredCoDirec = this.CoDirecCtrl.valueChanges.pipe(    
        startWith(''),
        map(state => state ? this._filterProfesseurs(state) : this.professeurs.slice())
      );

      this.filteredCotu= this.CotuCtrl.valueChanges.pipe(    
        startWith(''),
        map(state => state ? this._filterProfesseurs(state) : this.professeurs.slice())
      );
     }

 EquipeCtrl = new FormControl();
    filteredEquipes:Observable<equipe[]>;
    equipes: equipe[];
 private _filterEquipes(value: string): equipe[] {
  const filterValue = value.toLowerCase();
  return this.equipes.filter(state => state.nom.toLowerCase().indexOf(filterValue) === 0);
}
   
    DiresCtrl = new FormControl();
    filteredProfesseurs:Observable<professeur[]>;
    professeurs: professeur[];
    
    CoDirecCtrl = new FormControl();
    filteredCoDirec:Observable<professeur[]>;

    CotuCtrl = new FormControl();
    filteredCotu:Observable<professeur[]>;
    


 private _filterProfesseurs(value: string): professeur[] {
  const filterValue = value.toLowerCase();
  return this.professeurs.filter(state => state.nom.toLowerCase().indexOf(filterValue) === 0);
}
  
    
    doctorant:doctorant[];
    professeur:professeur[];
    equipe:equipe[]
    e=new Array();
    d=new Array();
    eqname:string;
    direcname:string;
    codirecname:string;
    cotuname:string;
    profe=new professeur();
    doc=new doctorant();
    id_doc:number;
    id_prof:number;
edit_profe_show:boolean=false;
edit_docto_show:boolean=false;

ngOnInit() {
  this.start();

 } 
 start(){
this.e=[];
this.d=[];

  this.docService.getAllDoctrant().subscribe(data=>{this.doctorant=data;
    for(let doct of this.doctorant){
      if(doct.directeurThese==null){  doct.profee="pas disponible";}
     else{this.profService.getProfesseurByid2(doct.directeurThese).subscribe(data=>{ 
        doct.profee=""+data.nom+" "+data.prenom})} 
    }
  })
  
  this.profService.getAllProfesseur().subscribe(data=>{this.professeur=data;for(let pro of this.professeur){
    this.eqService.getEquipeById(pro.equipeId).subscribe(data=> this.e.push(data.nom))
  } 
 }  )
    
 this.eqService.getAllEquipe().subscribe(
  data=>this.equipes=data
  );

  this.profService.getAllProfesseur().subscribe(
    data=>this.professeurs=data
    );
 }



logout(){
  this.loginservice.logOut();
  this.router.navigate([''])
}


@ViewChild("edit_doc") MyProp2: ElementRef;

@ViewChild("edit_prof") MyProp: ElementRef;


edit_pro(prof){
this.edit_profe_show=true
this.id_prof=prof.profId
setTimeout(() => {  this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
$("input[name*='cinpro']").val(prof.cin);
$("input[name*='nompro']").val(prof.nom);
$("input[name*='prenompro']").val(prof.prenom);
$("input[name*='emailpro']").val(prof.email);
$("input[name*='gradepro']").val(prof.grade);

this.eqService.getEquipeById(prof.equipeId).subscribe(
data=>{this.eqname=data.nom})
},250)




}


edit_do(doc){
  this.edit_docto_show=true;
  this.id_doc=doc.docid;
  setTimeout(() => {  this.MyProp2.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  $("input[name*='cindoc']").val(doc.cin);
  $("input[name*='nomdoc']").val(doc.nom);
  $("input[name*='prenomdoc']").val(doc.prenom);
  $("input[name*='intituleThesedoc']").val(doc.intituleThese);

  if(doc.directeurThese==null){this.direcname=null}
  if(doc.directeurThese!=null){this.profService.getProfesseurByid2(doc.directeurThese).subscribe(
    data=>{this.direcname=data.nom})}

    if(doc.coDirecteur==null){this.codirecname=null}
    if(doc.coDirecteur!=null){this.profService.getProfesseurByid2(doc.coDirecteur).subscribe(
      data=>{this.codirecname=data.nom})}

       if(doc.cotutelle==null){this.cotuname=null}
    if(doc.cotutelle!=null){this.profService.getProfesseurByid2(doc.cotutelle).subscribe(
      data=>{this.cotuname=data.nom})  }
  

  },250)

 
}

annuler_pro(){
  this.edit_profe_show=false
}


annuler_do(){
  this.edit_docto_show=false}



  updateprof(updateFormprof:NgForm){
 this.profe.cin = $("input[name*='cinpro']").val().toLocaleString();
  this.profe.prenom =$("#prenompro").val().toLocaleString();
  this.profe.nom =$("#nompro").val().toLocaleString();
  this.profe.email= $("input[name*='emailpro']").val().toLocaleString();
  this.profe.grade=$("input[name*='gradepro']").val().toLocaleString();
  this.profe.passwordProf=$("input[name*='passwdpro']").val().toLocaleString();
  this.profe.profId=this.id_prof;
  
    
if( this.profe.passwordProf=="" || this.profe.cin=="" || this.profe.email==""|| this.profe.prenom==""|| this.profe.nom==""|| this.profe.grade==""|| this.profe.passwordProf=="" ||   $("input[name*='equipenom']").val().toLocaleString()==""){

  this.notification.showNotification('top','center','Veuillez Remplir les champs*','danger')
}
else{
  this.eqService.getEquipeByName($("input[name*='equipenom']").val().toLocaleString()).subscribe(
    (data)=>{ if(data==null){this.notification.showNotification('top','center','Equipe n existe pas','danger')

    }
    else{
      this.profe.equipeId=data.equipeId;
      this.profService.updateProfesseur(this.profe).subscribe(
        data=>{if(!data){this.notification.showNotification('top','center','Cin deja existe','danger')}
                  else{      this.notification.showNotification('top','center','Professeur modifié ','success')   
                  this.start(); 
                        this.edit_profe_show=false }}
      )   
      
  
    
    }}  
     
  )

}
  }


  updatedoc(updateFormdoc:NgForm){
    this.doc.cin = $("input[name*='cindoc']").val().toLocaleString();
    this.doc.prenom = $("#prenomdoc").val().toLocaleString();
    this.doc.nom = $("#nomdoc").val().toLocaleString();
    this.doc.intituleThese = $("input[name*='intituleThesedoc']").val().toLocaleString();
    this.doc.passwordDoctorant = $("input[name*='passwddoc']").val().toLocaleString();
    this.doc.docid=this.id_doc;


   
       
   if( this.doc.passwordDoctorant=="" || this.doc.cin==""|| this.doc.prenom==""|| this.doc.nom==""||  $("input[name*='direcname']").val().toLocaleString()=="" ||  $("input[name*='codirecname']").val().toLocaleString()==""||  $("input[name*='cotuname']").val().toLocaleString()==""){
   
     this.notification.showNotification('top','center','Veuillez Remplir les champs*','danger')
   }
   else{
     this.profService.getProfesseurByName($("input[name*='direcname']").val().toLocaleString()).subscribe(
       (data)=>{ if(data==null){this.notification.showNotification('top','center','Professeur n existe pas','danger')

       }
       else{  
         this.doc.directeurThese=data.profId;
        this.profService.getProfesseurByName($("input[name*='codirecname']").val().toLocaleString()).subscribe(
          (data)=>{     if(data==null){this.notification.showNotification('top','center','Professeur n existe pas','danger')}  
                        else{
                          this.doc.coDirecteur=data.profId;
                          this.profService.getProfesseurByName($("input[name*='cotuname']").val().toLocaleString()).subscribe(
                            (data)=>{   if(data==null){this.notification.showNotification('top','center','Professeur n existe pas','danger')}  
                          
                                          else{
                                            this.doc.cotutelle=data.profId;
                                            console.log(this.doc)
                                            this.docService.updateDoctorant(this.doc).subscribe(
                                              data=>{if(!data){this.notification.showNotification('top','center','Cin deja existe','danger') }
                                                      else{  this.notification.showNotification('top','center','Doctorant modifié ','success')
                                                      this.start();
                                                          this.edit_docto_show=false;}}
                                            ) 
                                          }})


                        }
        
        
        })


      

       
       }}  
        
     )
   
   }
     }


     delete_pro(prof){
      this.profService.deleteProfesseur(prof.profId).subscribe(data=>this.start())
    this.notification.showNotification('top','center','Professeur supprimé ','success')
      

  }

  delete_do(doc){
    this.docService.deleteDoctorant(doc.docid).subscribe(data=>this.start())
    this.notification.showNotification('top','center','Doctorant supprimé ','success')
    
  }
}
