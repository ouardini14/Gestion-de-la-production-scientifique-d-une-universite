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
import { publication } from 'app/models/publication';
import {AngularFireStorage} from '@angular/fire/storage'
import { PublicationService } from 'app/service/modelServices/publication.service';
import { recherche } from 'app/models/recherche';
import { RechercheService } from 'app/service/modelServices/recherche.service';
@Component({
  selector: 'app-home-doc',
  templateUrl: './home-doc.component.html',
  styleUrls: ['./home-doc.component.css']
})
export class HomeDocComponent implements OnInit {
  utc = new Date().toJSON().slice(0,10);

  add_rech:boolean=false;
  constructor(private router: Router,
    private angf:AngularFireStorage,
    private eqService:EquipeService,
    private rechService:RechercheService,
    private pubService:PublicationService,
    private notification:NotificationsComponent,

    private loginservice: AuthentificationService,private docService:DoctorantService,private profService:ProfesseurService) { }
    user:string;
    doc=new doctorant()
    directeurThese= new professeur();
    coDirecteur= new professeur();
    cotutelle=new professeur();
    recherche=new recherche();
    recherches:recherche[]
  ngOnInit(): void {

    this.user=sessionStorage.getItem('cin');

    this.docService.getDoctrantBycin2(this.user).subscribe(data=>{this.doc=data;

      this.rechService.getAllRechercheByDocid(this.doc.docid).subscribe(
        data=>
        {this.recherches=data;
          
    
    
        }
    
       )




      if(this.doc.directeurThese==null){this.directeurThese.nom="pas ";this.directeurThese.prenom=" disponible" }  
          if(this.doc.directeurThese!=null) {this.profService.getProfesseurByid2(this.doc.directeurThese).subscribe(data=>this.directeurThese=data );}

      if(this.doc.coDirecteur==null){this.coDirecteur.nom="pas ";this.coDirecteur.prenom=" disponible" }
      if(this.doc.coDirecteur!=null) { this.profService.getProfesseurByid2(this.doc.coDirecteur).subscribe(data=>this.coDirecteur=data );}

      if(this.doc.cotutelle==null){this.cotutelle.nom="pas ";this.cotutelle.prenom=" disponible" }
            if(this.doc.cotutelle!=null) { this.profService.getProfesseurByid2(this.doc.cotutelle).subscribe(data=>this.cotutelle=data );}

    } );

  
   

   


  }
  logout(){
    this.loginservice.logOut();
    this.router.navigate([''])
  }

  @ViewChild("add_rechh") MyProp2: ElementRef;


  add_re(){
    this.add_rech=true
    setTimeout(() => { 
      
      this.MyProp2.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
   },250)
  }

  add_recherche(addFormrec:NgForm){
    this.recherche.docId=this.doc.docid;
this.recherche.dateCreation=this.utc;
    this.recherche.titre=$("input[name*='titre']").val().toLocaleString();
this.recherche.statu=addFormrec.value.stat;
  this.rechService.addRecherche(this.recherche).subscribe(
    respone=>{
      if(!respone){this.notification.showNotification('top','center','Ce titre deja existe','danger')}
      else{
        this.notification.showNotification('top','center','Recherche ajouté','success')
        this.ngOnInit();
        this.add_rech=false;
      }
    }

  )

  }

  annuler_recherche()
{this.add_rech=false;



}

}
