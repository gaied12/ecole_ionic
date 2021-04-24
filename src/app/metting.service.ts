import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MettingService {
  base_url= environment.base_url;

  constructor(private http: HttpClient) { }
  addMetting(data:any):Observable<any>{
    return this.http.post<any>(this.base_url+'add/metting',data);



  }
}
