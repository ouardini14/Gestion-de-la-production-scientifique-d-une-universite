import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publication } from 'app/models/publication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private apiUrl='http://localhost:8080/publication'

  constructor(private http:HttpClient) { }

  addPublication(pub:publication):Observable<any>{
    return this.http.post<any>(this.apiUrl+"/add",pub)
  }
  getAllPublication():Observable<publication[]>{
    return this.http.get<publication[]>(this.apiUrl);
  }

  getAllPublicationByProfid(id):Observable<any>{
    return this.http.get<any>(this.apiUrl+"/all/"+id);
  }

 deletePublication(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl+"/delete/"+id)
  }
}
