import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publication } from 'app/models/publication';
import { Observable } from 'rxjs';
import { recherche } from 'app/models/recherche';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  private apiUrl='http://localhost:8080/recherche'

  constructor(private http:HttpClient) { }

  addRecherche(rech:recherche):Observable<any>{
    return this.http.post<any>(this.apiUrl+"/add",rech)
  }
 getAllRecherche():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  getAllRechercheByDocid(id):Observable<any>{
    return this.http.get<any>(this.apiUrl+"/all/"+id);
  }

 deleteRecherche(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl+"/delete/"+id)
  }
}
