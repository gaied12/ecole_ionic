import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MettingService {
  base_url= environment.base_url;
  private idStud= <BehaviorSubject<string>>new BehaviorSubject(null);


  constructor(private http: HttpClient) { }
  addMetting(data:any):Observable<any>{
    return this.http.post<any>(this.base_url+'add/metting',data);



  }
 allMetting(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.base_url+`all/metting/prof/${id}`);

  }
  accptMett(id:number):Observable<any>{
    return this.http.get<any>(this.base_url+`mett/confim/${id}`);

  }
  cancelMett(id:number):Observable<any>{
    return this.http.get<any>(this.base_url+`mett/cancel/${id}`);

  }
  getMettingByParent(parentId:string,studId:string):Observable<any[]>{


    let params =new HttpParams();
    params=params.append('parentId',parentId);
    params=params.append('studId',studId);
    return this.http.get<any[]>(this.base_url+'all/metting/parent',{params:params});

  }
  setStud(x:string){
    this.idStud.next(x);
   }
   getStud(){
     return this.idStud.asObservable();

   }


}
