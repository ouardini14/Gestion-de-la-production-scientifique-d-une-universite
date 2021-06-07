import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ElementRef, OnInit } from '@angular/core';
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
import { RechercheService } from 'app/service/modelServices/recherche.service';
import { recherche } from 'app/models/recherche';
@Component({
  selector: 'app-card-doc',
  templateUrl: './card-doc.component.html',
  styleUrls: ['./card-doc.component.css']
})
export class CardDocComponent{
  doc=new doctorant();
  prof:string;
  rech:recherche[];
  constructor(private router: Router,
    private eqService:EquipeService,
    private notification:NotificationsComponent,
    private rechService:RechercheService,
    private loginservice: AuthentificationService,private docService:DoctorantService,private profService:ProfesseurService,
    public dialogRef: MatDialogRef<CardDocComponent>,
    @Inject(MAT_DIALOG_DATA) public data: doctorant) {


      this.doc=this.data;  
      if(this.data.directeurThese!=null){
          this.profService.getProfesseurByid2(this.data.directeurThese).subscribe(
        data=>{this.prof=data.nom+" "+data.prenom;})
        } 
        else{
          this.prof="Pas disponible"
        }
      

        this.rechService.getAllRechercheByDocid(this.data.docid).subscribe(
          data=>{this.rech=data;

          }
        )
    
      
    
    }

 
  close() {
    this.dialogRef.close();
  }
}
