import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { professeur } from 'app/models/professeur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {
  private apiUrl='http://localhost:8080/professeur'

  constructor(private http:HttpClient) { }
  professeur:professeur[]


  loginProfesseur(prof:professeur):Observable<any>{

    return this.http.post<any>(this.apiUrl+"/login",prof)
  }



  getProfesseurBycin(cin):Observable<professeur[]>{
    return this.http.get<professeur[]>(this.apiUrl+'/cin/'+cin);
  }

  getProfesseurBycin2(cin):Observable<professeur>{
    return this.http.get<professeur>(this.apiUrl+'/cin/'+cin);
  }

  getProfesseurByid(id):Observable<professeur>{
    return this.http.get<professeur>(this.apiUrl+'/'+id);
  }
  

  getAllProfesseur():Observable<professeur[]>{
    return this.http.get<professeur[]>(this.apiUrl);
  }

  getProfesseurByid2(id):Observable<professeur>{
    return this.http.get<professeur>(this.apiUrl+'/'+id);
  }

  getProfesseurByName(name):Observable<professeur>{
    return this.http.get<professeur>(this.apiUrl+'/nom/'+name);
  }

  updateProfesseur(prof:professeur):Observable<any>{
    return this.http.put<any>(this.apiUrl+"/update",prof)
  }

  deleteProfesseur(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl+'/delete/'+id);
  }

  addProfesseur(prof:professeur):Observable<any>{
    
        return this.http.post<any>(this.apiUrl+"/add",prof)
      }
}
