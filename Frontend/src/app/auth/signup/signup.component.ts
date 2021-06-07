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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new ErrorStateMatcher();


  profe=new professeur();
  doc=new doctorant();

    EquipeCtrl = new FormControl();
    filteredallequipes:Observable<equipe[]>;
    allequipes: equipe[];
    private _filterEquipes(value: string): equipe[] {
      const filterValue = value.toLowerCase();
      return this.allequipes.filter(state => state.nom.toLowerCase().indexOf(filterValue) === 0);
    }


    DiresCtrl = new FormControl();
    filteredDires:Observable<professeur[]>;

    professeurs: professeur[];
 private _filterProfesseurs(value: string): professeur[] {
  const filterValue = value.toLowerCase();
  return this.professeurs.filter(state => state.nom.toLowerCase().indexOf(filterValue) === 0);
}
  
    CoDirecCtrl = new FormControl();
    filteredCoDirec:Observable<professeur[]>;

    CotuCtrl = new FormControl();
    filteredCotu:Observable<professeur[]>;


  constructor(private router: Router,
    private eqService:EquipeService,
    private notification:NotificationsComponent,
    private loginservice: AuthentificationService,private docService:DoctorantService,private profService:ProfesseurService) {

     }


  ngOnInit(): void {
    this.eqService.getAllEquipe().subscribe(
      data=>{this.allequipes=data;
        this.filteredallequipes = this.EquipeCtrl.valueChanges.pipe( 
          startWith(''),
          map(state => state ? this._filterEquipes(state) : this.allequipes.slice())
        );
      }

      );

      this.profService.getAllProfesseur().subscribe(
        data=>{this.professeurs=data;
              this.filteredDires = this.DiresCtrl.valueChanges.pipe(    
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
        );



  }

 
  addprof(addFormprof:NgForm){

    
    this.profe.cin = $("input[name*='cinpro']").val().toLocaleString();
     this.profe.prenom =$("#prenompro").val().toLocaleString();
     this.profe.nom =$("#nompro").val().toLocaleString();
     this.profe.email= $("input[name*='emailpro']").val().toLocaleString();
     this.profe.grade=$("input[name*='gradepro']").val().toLocaleString();
     this.profe.passwordProf=$("input[name*='passwdpro']").val().toLocaleString();
     
     
       
   if( this.profe.passwordProf=="" || this.profe.cin=="" || this.profe.email==""|| this.profe.prenom==""|| this.profe.nom==""|| this.profe.grade==""|| this.profe.passwordProf=="" ||   $("input[name*='equipenom']").val().toLocaleString()==""){
   
     this.notification.showNotification('top','center','Veuillez Remplir les champs*','danger')
   }
   else{
     this.eqService.getEquipeByName($("input[name*='equipenom']").val().toLocaleString()).subscribe(
       (data)=>{ if(data==null){this.notification.showNotification('top','center','Equipe n existe pas','danger')
   
       }
       else{
         this.profe.equipeId=data.equipeId;
         this.profService.addProfesseur(this.profe).subscribe(
           data=>{if(!data){this.notification.showNotification('top','center','Cin deja existe','danger')}
                     else{    
                         this.notification.showNotification('top','center','Professeur ajouté ','success') 
                         $("input").val("");
  
                    
                    }}
         )   
         
     
       
       }}  
        
     )
   
   }
     }


     adddoc(addFormdoc:NgForm){
    this.doc.cin = $("input[name*='cindoc']").val().toLocaleString();
    this.doc.prenom = $("#prenomdoc").val().toLocaleString();
    this.doc.nom = $("#nomdoc").val().toLocaleString();
    this.doc.intituleThese = $("input[name*='intituleThesedoc']").val().toLocaleString();
    this.doc.passwordDoctorant = $("input[name*='passwddoc']").val().toLocaleString();


   
       
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
                                            this.docService.addDoctorant(this.doc).subscribe(
                                              data=>{if(!data){this.notification.showNotification('top','center','Cin deja existe','danger') }
                                                      else{  this.notification.showNotification('top','center','Doctorant ajouté ','success')
                                                      $("input").val("");

                                                      }}
                                            ) 
                                          }})


                        }
        
        
        })


      

       
       }}  
        
     )
   
   }

     }
}
