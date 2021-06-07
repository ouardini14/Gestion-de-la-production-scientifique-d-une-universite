import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { doctorant } from 'app/models/doctrorant';
import { professeur } from 'app/models/professeur';
import { AuthentificationService } from 'app/service/authentification.service';
import { DoctorantService } from 'app/service/modelServices/doctorant.service';
import { ProfesseurService } from 'app/service/modelServices/professeur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  doc=new doctorant()
  prof=new professeur ()  

  constructor(private router: Router,
    private loginservice: AuthentificationService,private docService:DoctorantService,private profService:ProfesseurService) { }

  user:string;
  typeUser:string;

  ngOnInit(): void { 
    this.user=sessionStorage.getItem('cin');

   this.docService.getDoctrantBycin(this.user).subscribe(
    data=>{
      if(data){this.setTypeUser("doctorant") }
      else{this.setTypeUser("professeur") }
          }  
      )
     }

setTypeUser(str:string){
this.typeUser=str;
}

  logout(){
    this.loginservice.logOut();
    this.router.navigate([''])
  }

}
