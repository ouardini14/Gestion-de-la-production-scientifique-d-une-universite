import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctorant } from 'app/models/doctrorant';
import { equipe } from 'app/models/equipe';
import { professeur } from 'app/models/professeur';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private apiUrl='http://localhost:8080/equipe'

  constructor(private http:HttpClient) { }


getEquipeById(id):Observable<equipe>{
  return this.http.get<equipe>(this.apiUrl+'/'+id);
} 
getEquipeByName(nom):Observable<equipe>{
  return this.http.get<equipe>(this.apiUrl+'/nom/'+nom);
}

addEquipe(equipe:equipe):Observable<any>{
  return this.http.post<any>(this.apiUrl+"/add",equipe)
}

getAllEquipe():Observable<any>{
  return this.http.get<any>(this.apiUrl)
}




}
