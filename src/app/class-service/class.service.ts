import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  base_url= environment.base_url;


  constructor(private http: HttpClient) { }
  addEmp(x:File,idClas:string,title:string,desc:string):Observable<any>{
    let params =new FormData();
    params.append('file',x );
    params.append('idLevel',idClas);
    params.append('title',title);
    params.append('desc',desc);

    return this.http.post<any>(this.base_url+'add/ttable',params)

  }
  delEmp(id:number){
   return this.http.delete(this.base_url+`del/ttable/${id}`);
  }
  getEmp(id:number):Observable<any>{
    return this.http.get<any>(this.base_url+`gel/ttable/${id}`);
   }
   addClass(level:string):Observable<any>{
     let data=new FormData();
     data.append('level',level);
    return this.http.post<any>(this.base_url+`add/class`,data);
   }
 OwnerTtable(id:number):Observable<any>{
  var requestHeader = { headers: new HttpHeaders({ 'Content-Type': 'text/plain', 'No-Auth': 'False' })};
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');


  return this.http.get<any>(this.base_url+`get/type/ttable/${id}`,{ headers, responseType: 'text' as 'json'  });


 }

}
