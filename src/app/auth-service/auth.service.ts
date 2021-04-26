import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url= environment.base_url;

  constructor(private http: HttpClient) { }
  addCode(email:string,idStud:string):Observable<any>{
    let params=new HttpParams();
    params=params.append('email',email)
    params=params.append('idStud',idStud)


    return this.http.post<any>(this.base_url+'send/code',params)
  }
  addParent(data:any):Observable<any>{
    return this.http.post<any>(this.base_url+'add/parent',data)



  }
  addProf(data:any):Observable<any>{
    return this.http.post<any>(this.base_url+'add/prof',data)



  }


  auth(email:string,password:string):Observable<any>{
    let params=new HttpParams();
    params=params.append('email',email)
    params=params.append('password',password)
    return this.http.post<any>(this.base_url+'login',params)


  }
  addDevice(idUser:string,keyDevice:string):Observable<any>{

    let params=new HttpParams();
    params=params.append('idUser',idUser);
    params=params.append('keyDevice',keyDevice);


    return this.http.post<any>(this.base_url+'add/device',params)
  }
  getUser(id:number):Observable<any>{
    return this.http.get<any>(this.base_url+`get/user/${id}`)


  }

}
