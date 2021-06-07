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
@Component({
  selector: 'app-home-prof',
  templateUrl: './home-prof.component.html',
  styleUrls: ['./home-prof.component.css']
})
export class HomeProfComponent implements OnInit {
  utc = new Date().toJSON().slice(0,10);
  path:String;
  constructor(private router: Router,
    private angf:AngularFireStorage,
    private eqService:EquipeService,
    private pubService:PublicationService,
    private notification:NotificationsComponent,

    private loginservice: AuthentificationService,private docService:DoctorantService,private profService:ProfesseurService) { }
    publications:publication[];
    prof=new professeur();
    equipe=new equipe();
    direct=new professeur();
    codire=new professeur();
    cotu=new professeur();
    doc=new doctorant();
    publication=new publication();
    p=new publication();

    allDocs=new Array();
    add_publ:boolean=false;
  ngOnInit(): void {
    this.allDocs=[];
    this.profService.getProfesseurBycin2(sessionStorage.getItem('cin')).subscribe(data=>{this.prof=data;

      this.pubService.getAllPublicationByProfid(this.prof.profId).subscribe(
        data=>{
          this.publications=data;
          for( this.p of this.publications){
              this.p.article=this.p.titre;
          }
        }
      )
  


    this.eqService.getEquipeById(data.equipeId).subscribe(
            data=>{this.equipe=data;
              this.docService.getAllDoctrant().subscribe(
                data=>{for( let doc of data){
                  if(doc.directeurThese==this.prof.profId || doc.coDirecteur==this.prof.profId ||doc.cotutelle==this.prof.profId ){
                    this.allDocs.push(doc.nom);
                    
                  }
                }

                }
              )

             } )
    })

   

  }

  logout(){
    this.loginservice.logOut();
    this.router.navigate([''])
  }

  @ViewChild("add_pubb") MyProp2: ElementRef;


add_pu(){
  this.add_publ=true
  setTimeout(() => { 
    
    this.MyProp2.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
 },250)
}

add_pub(addFormpub:NgForm){
  

  this.publication.titre=$("input[name*='titre']").val().toLocaleString();
  this.publication.indexType=addFormpub.value.index;
this.publication.profId=this.prof.profId;
this.publication.datePublication=this.utc;

this.pubService.addPublication(this.publication).subscribe(
  respone=>{
    if(!respone){this.notification.showNotification('top','center','Ce titre deja existe','danger')}
    else{this.angf.upload($("input[name*='titre']").val().toLocaleString()  ,this.path);
      this.notification.showNotification('top','center','Publication ajouté','success')
      this.ngOnInit();
      this.add_publ=false;
    }
  }
)
}

delete_pub(pub)
{
  this.pubService.deletePublication(pub.publicationId).subscribe(
    data=>{this.notification.showNotification('top','center','Publication Supprimé','success');
  this.ngOnInit()}
  )
}
upload($event){
  this.path=$event.target.files[0]
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

annuler_publication()
{
this.add_publ=false

}
}
