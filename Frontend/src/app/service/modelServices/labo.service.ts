import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctorant } from 'app/models/doctrorant';
import { equipe } from 'app/models/equipe';
import { labo } from 'app/models/labo';
import { professeur } from 'app/models/professeur';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LaboService {
  private apiUrl='http://localhost:8080/labo'

  constructor(private http:HttpClient) { }

  getLaboById(id):Observable<labo[]>{
    return this.http.get<labo[]>(this.apiUrl+'/'+id);
  }
  
  addLabo(labo:labo):Observable<any>{
    return this.http.post<any>(this.apiUrl+"/add",labo)
  }

  getLaboByName(name):Observable<labo[]>{
    return this.http.get<labo[]>(this.apiUrl+'/nom/'+name);
  }

    getAllLabos():Observable<labo[]>{
      return this.http.get<labo[]>(this.apiUrl);
    }
}
