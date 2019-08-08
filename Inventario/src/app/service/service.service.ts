import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getTodo(url:string){
    return this.http.get(url)
  }
  
  agregarPersona(url,persona){
    return this.http.post(url, persona, httpOptions);    
  }

  eliminarPersona(url,identificador):Observable<any>{
    return this.http.delete(url+'/'+identificador);
  }

  actualizarPersona(url,persona){
    return this.http.put(url,{"id":persona.id,"data":persona},httpOptions)
  }

}
