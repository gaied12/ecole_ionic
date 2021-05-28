import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushserviceService {
  base_url= environment.base_url;

  constructor(private http: HttpClient) { }
  pushUsers(msg:string):Observable<any>{
let params =new HttpParams();
params=params.append('msg',msg);
    return this.http.post<any>(this.base_url+'send/push/alluser',params);
  }
}
