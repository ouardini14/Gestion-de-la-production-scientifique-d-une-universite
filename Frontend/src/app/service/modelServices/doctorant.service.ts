import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctorant } from 'app/models/doctrorant';
import { professeur } from 'app/models/professeur';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DoctorantService {
   utc = new Date().toJSON().slice(0,10);
  private apiUrl='http://localhost:8080/doctorant'
  constructor(private http:HttpClient) { }

 
  loginDoctorant(doc:doctorant):Observable<any>{
    return this.http.post<any>(this.apiUrl+"/login",doc)
  }

  getDoctrantBycin(cin):Observable<doctorant[]>{
    return this.http.get<doctorant[]>(this.apiUrl+'/cin/'+cin);
  }

  getDoctrantBycin2(cin):Observable<doctorant>{
    return this.http.get<doctorant>(this.apiUrl+'/cin/'+cin);
  }

  getAllDoctrant():Observable<doctorant[]>{
    return this.http.get<doctorant[]>(this.apiUrl);
  }

  updateDoctorant(doc:doctorant):Observable<any>{
    return this.http.put<any>(this.apiUrl+"/update",doc)
  }
  deleteDoctorant(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl+'/delete/'+id);
  }

 addDoctorant(doc:doctorant):Observable<any>{
doc.anneeInscriptiondate=this.utc;

    return this.http.post<any>(this.apiUrl+"/add",doc)
  }

}



