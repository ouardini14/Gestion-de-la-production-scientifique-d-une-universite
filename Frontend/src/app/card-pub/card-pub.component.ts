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
import { publication } from 'app/models/publication';
import { PublicationService } from 'app/service/modelServices/publication.service';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-card-pub',
  templateUrl: './card-pub.component.html',
  styleUrls: ['./card-pub.component.css']
})
export class CardPubComponent  {
prof=new professeur();
  constructor(private router: Router,
    private eqService:EquipeService,
    private angf:AngularFireStorage,
    private notification:NotificationsComponent,
    private pubService:PublicationService,
    private rechService:RechercheService,
    private loginservice: AuthentificationService,private docService:DoctorantService,private profService:ProfesseurService,
    public dialogRef: MatDialogRef<CardPubComponent>,
    @Inject(MAT_DIALOG_DATA) public data: publication) {

        console.log(data)
      this.profService.getProfesseurByid2(data.profId).subscribe(
        data=>{this.prof=data;

        }
      )
    }

   download(str){this.angf.ref(str).getDownloadURL().subscribe((url) => {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
    
     
    })
    
    
     
    }
  close() {
    this.dialogRef.close();
  }

}
