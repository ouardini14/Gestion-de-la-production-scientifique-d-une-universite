import { Component, ElementRef, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
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
import { labo } from 'app/models/labo';
import { LaboService } from 'app/service/modelServices/labo.service';

import {from } from 'rxjs';


@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
 

universite:string[]=['Mohammed V','Mohamed Ier','Ibn Zohr','Cadi Ayyad','Ibn-Tofail','Abdelmalek Essaâdi','Sidi Mohamed Ben Abdellah','Hassan II','Chouaib Doukkali','Hassan-Ier','Sultan Moulay Slimane','Moulay-Ismaïl']

constructor(private router: Router,
  private eqService:EquipeService,
  private laService:LaboService,
  private notification:NotificationsComponent,
  private loginservice: AuthentificationService,private docService:DoctorantService,private profService:ProfesseurService) { 

    this.filteredStates = this.LaboCtrl.valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.states.slice())
    );
  }

LaboCtrl = new FormControl();
  filteredStates:Observable<labo[]>;
  lab = 'non';

 

  equipe=new equipe();
    labo=new labo();

  states: labo[];
  

  private _filterStates(value: string): labo[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.nom.toLowerCase().indexOf(filterValue) === 0);
  }

 ngOnInit(): void {
  this.laService.getAllLabos().subscribe(
    data=>this.states=data
    );

  }

  
 

  addEquipe(nomEquipe,nomLabo?,etablissement?,universite?,respocin?,lab?,laboo?){
if(nomEquipe==null){
  this.notification.showNotification('top','center','Veuillez Remplir les champs*','danger')
}
else{
  if(lab=="oui"){
    if(nomLabo==null || etablissement==null ||  universite==null ||  respocin==null ){
      this.notification.showNotification('top','center','Veuillez Remplir les champs*','danger')
    }
    else{this.profService.getProfesseurBycin(respocin).subscribe(
      response=>{if(response){ 
        
       this.setNewLabo(nomLabo,Number(Object.values(response)[0]),etablissement,universite);


       this.laService.addLabo(this.labo).subscribe(
          response=>{
            if(!response) {this.notification.showNotification('top','center','Labo deja existe','danger')}
            else{
              
         
              this.laService.getLaboByName(this.labo.nom).subscribe(
                response=>{
                  this.setNewEquipe(nomEquipe,Number(Object.values(response)[0]));


                          this.eqService.addEquipe(this.equipe).subscribe(
                            response=>{if(!response) {  this.notification.showNotification('top','center','Nom d equipe deja existe','danger')}
                            if(response){this.notification.showNotification('top','center','Equipe ajouté!!','success')
                        
                          }
                                  }
                          );
                }
              );
              

            }
          }     
        );
         }
          
        else{ this.notification.showNotification('top','center','Professeur n existe pas','danger')}
}
      
    );}
  

 
}

if(lab=="non"){
  this.equipe.nom=nomEquipe;

  this.eqService.addEquipe(this.equipe).subscribe(

    response=>{if(!response) {  this.notification.showNotification('top','center','Nom d equipe deja existe','danger')}
    if(response){this.notification.showNotification('top','center','Equipe ajouté!!','success') 
    this.router.navigate(['Admin'])   ;
  }
          }
  );
}

if(lab=="non_exist"){

    this.laService.getLaboByName(laboo).subscribe(
      data=>{
       this.setNewEquipe(nomEquipe.toLowerCase(),Number(Object.values(data)[0]));
       this.eqService.addEquipe(this.equipe).subscribe(
        response=>{if(!response) {  this.notification.showNotification('top','center','Nom d equipe deja existe','danger')}
        if(response){this.notification.showNotification('top','center','Equipe ajouté!!','success')
  this.router.navigate(['Admin'])   ;
      }
              }
      );
      }
    )
}
}

}


setNewLabo(nom,respo,etab,univ){
  this.labo.responsable=respo;
     
  this.labo.nom=nom;
  this.labo.etablissement=etab;
  this.labo.univ=univ;
  console.log(nom,respo,etab,univ)
}

setNewEquipe(nom,laboid){
  this.equipe.nom=nom;
  this.equipe.laboId=laboid;

}






}
