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
}
