import { Component, ElementRef, Injectable, OnInit } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, shareReplay, startWith} from 'rxjs/operators';
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
import { recherche } from 'app/models/recherche';
import { publication } from 'app/models/publication';
import { PublicationService } from 'app/service/modelServices/publication.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CardDocComponent } from 'app/card-doc/card-doc.component';
import { CardProfComponent } from 'app/card-prof/card-prof.component';
import { CardPubComponent } from 'app/card-pub/card-pub.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class SearchComponent implements OnInit {
  d:boolean=false;
  RechercherCtrl = new FormControl();


  ProfesseurCtrl = new FormControl();
  filteredProfesseurs:Observable<professeur[]>;
  professeurs: professeur[];

  DoctorantCtrl = new FormControl();
  filteredDoctorants:Observable<doctorant[]>;
 doctorants: doctorant[];



  PublicationCtrl = new FormControl();
  filteredPublications:Observable<publication[]>;
  publications: publication[];

  publicationsdate: publication[];
  DatePublicationCtrl = new FormControl();
  filteredDatePublications:Observable<publication[]>;



private _filterProfesseurs(value: string): professeur[] {
const filterValue = value.toLowerCase();
return this.professeurs.filter(state => state.nom.toLowerCase().indexOf(filterValue) === 0);
}

private _filteredDoctorants(value: string): doctorant[] {
  const filterValu = value.toLowerCase();
  return this.doctorants.filter(state => state.nom.toLowerCase().indexOf(filterValu) === 0);
  }



    private _filteredPublications(value: string): publication[] {
      const filterVal = value.toLowerCase();
      return this.publications.filter(state => state.titre.toLowerCase().indexOf(filterVal) === 0);
      }

      private _filteredDatePublications(value: string): publication[] {
        const filterVa = value.toLowerCase();
        return this.publicationsdate.filter(state => state.datePublication.toLowerCase().indexOf(filterVa) === 0);
        }


  constructor(private router: Router,
    private eqService:EquipeService,
    private pubService:PublicationService,
    private matDialog: MatDialog,
    private notification:NotificationsComponent,
    private loginservice: AuthentificationService,private docService:DoctorantService,private profService:ProfesseurService) {

  
   

      
    
    }

  ngOnInit(): void {
    
  }
s:any;
@ViewChild("profes") profes: ElementRef;
@ViewChild("doct") doct: ElementRef;
@ViewChild("publ") publ: ElementRef;
@ViewChild("date") date: ElementRef;

  recherchePar(searchby){


if(searchby=="Professeur"){ 
  this.s='profes';this.RechercherCtrl=this.ProfesseurCtrl;
  this.profService.getAllProfesseur().subscribe(
    data=>{ this.professeurs=data;
       this.filteredProfesseurs = this.RechercherCtrl.valueChanges.pipe(    
    startWith(''),
    map(state => state ? this._filterProfesseurs(state) : this.professeurs.slice())
  );  this.s='profes';this.RechercherCtrl=this.ProfesseurCtrl;

 
    }
  )

 

}

if(searchby=="Doctorant"){  
  this.s='doct';  this.RechercherCtrl=this.DoctorantCtrl;

  this.docService.getAllDoctrant().subscribe(
    data=>{ this.doctorants=data;
       this.filteredDoctorants = this.RechercherCtrl.valueChanges.pipe(    
    startWith(''),
    map(state => state ? this._filteredDoctorants(state) : this.doctorants.slice())
  );
  this.s='doct';  this.RechercherCtrl=this.DoctorantCtrl;

    }
  )

 

}

if(searchby=="Publication"){  
  this.s='publ';  this.RechercherCtrl=this.PublicationCtrl;

  this.pubService.getAllPublication().subscribe(
    data=>{ this.publications=data;
       this.filteredPublications = this.RechercherCtrl.valueChanges.pipe(    
    startWith(''),
    map(state => state ? this._filteredPublications(state) : this.publications.slice())
  );
  this.s='publ';  this.RechercherCtrl=this.PublicationCtrl;


    }
  )

 

}


if(searchby=="DatePublication"){  
  
  this.s='date';  this.RechercherCtrl=this.DatePublicationCtrl;

  this.pubService.getAllPublication().subscribe(
    data=>{ this.publicationsdate=data;this.RechercherCtrl.reset();
       this.filteredDatePublications = this.RechercherCtrl.valueChanges.pipe(    
    startWith(''),
    map(state => state ? this._filteredDatePublications(state) : this.publicationsdate.slice())
  );
  this.s='date';  this.RechercherCtrl=this.DatePublicationCtrl;

    }
  )

 

}

  }


  openDialogDoc(doc:doctorant) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=doc;
    this.matDialog.open(CardDocComponent, dialogConfig);
  }

  openDialogProf(prof:professeur) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=prof;
    this.matDialog.open(CardProfComponent, dialogConfig);
  }

  openDialogPub(pub:publication) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=pub;
    this.matDialog.open(CardPubComponent, dialogConfig);
  }

}





