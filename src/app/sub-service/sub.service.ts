import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Abs } from '../Model/abs';

@Injectable({
  providedIn: 'root'
})
export class SubService {
  base_url= environment.base_url;


  constructor(private http: HttpClient) { }
  public allSub():Observable<any[]>{

    return this.http.get<any[]>(this.base_url+'all/subject');
  }
  public addAbs(x:Abs):Observable<any>{
    return this.http.post<any>(this.base_url+'/add/Abs',x);

  }
  public allProf():Observable<any[]>{
    return this.http.get<any[]>(this.base_url+'get/all/prof');


  }
  addEmp(x:File,idClas:string,title:string,desc:string):Observable<any>{
    let params =new FormData();
    params.append('file',x );
    params.append('idProf',idClas);
    params.append('title',title);
    params.append('desc',desc);

    return this.http.post<any>(this.base_url+'add/table/prof',params)

  }
  delEmp(id:number){
    return this.http.delete(this.base_url+`/delete/table/prof/${id}`);
   }

}
