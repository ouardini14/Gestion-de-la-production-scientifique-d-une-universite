import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { doctorant } from 'app/models/doctrorant';
import { professeur } from 'app/models/professeur';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { DoctorantService } from './modelServices/doctorant.service';
import { ProfesseurService } from './modelServices/professeur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
doc=new doctorant()
prof=new professeur ()

constructor(private router: Router,private docService:DoctorantService,private profService:ProfesseurService, private notification:NotificationsComponent) { }

  authenticate(cin: string, passwd: string) { 

    this.doc.passwordDoctorant=passwd;
    this.doc.cin=cin;

    this.prof.passwordProf=passwd;
    this.prof.cin=cin;

    this.docService.loginDoctorant(this.doc).subscribe(
  
            response=>{
          if(response){
        sessionStorage.setItem('cin', cin)
        this.router.navigate(['Home'])
                      }
                      
          else{
            this.profService.loginProfesseur(this.prof).subscribe(
              response=>{
                if(response){
                  sessionStorage.setItem('cin', cin)
                  this.router.navigate(['Home'])
                                }
                else{      
                  if (cin === "admin" && passwd === "admin") {
                    sessionStorage.setItem('cin', "0000")
                    this.router.navigate(['Admin'])
                  return true;
                  } else {
                    this.notification.showNotification('top','center','CIN ou Mot de passe est incorrect','danger')
                    return false;
                  }
                  
                 
              }
              }
              
            );


            
          }

})
  }

getUserType(cin):string{
  this.doc.cin=cin;
  this.prof.cin=cin;

  this.docService.loginDoctorant(this.doc).subscribe(
    
    response=>{
      if(response){
        return "doctorant"
                  }}

  );

  return "professeur"

}

  isUserLoggedIn() {
    let user = sessionStorage.getItem('cin')
    console.log(!(user === null))
    return !(user === null)
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('cin')
    if(user!=="0000"){return false;}
    else{return true;}
  }
  
  logOut() {
    sessionStorage.removeItem('cin')
  }
}
