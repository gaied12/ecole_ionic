import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  base_url= environment.base_url;


  constructor(private http:HttpClient) { }
  getNotesBylevel(id: number):Observable<any[]>{
   return this.http.get<any[]>(this.base_url+`get/note/level/${id}`);
  }
  addNote(f:File,type:string,des:string,title:string,id:string[]):Observable<any>{
  
    var formData = new FormData();
    formData.append('type',type);
  
    formData.append('des',des);
    formData.append('file',f);
    formData.append('title',title);
    for (let i = 0; i < id.length; i++) {    
      formData.append('levelsId',id[i]);
    }
    return this.http.post<any>(this.base_url+'add/notes',formData);




  }
  getNotes():Observable<any[]>{
    

    return this.http.get<any[]>(this.base_url+`get/all/note`);


  }
  getNoteByDate(date:string):Observable<any[]>{
    

    return this.http.get<any[]>(this.base_url+`get/note/date?date=${date}`);


  }
  getNote(id: number):Observable<any>{
    return this.http.get<any>(this.base_url + `note/${id}`);
  }
  deleteNote(id:number):Observable<any>{
    return this.http.delete<any>(this.base_url + `delete/note/${id}`);
  }
  updNote(f:File,id:number,title:string,desc:string):Observable<any>{
    var formData = new FormData();

    formData.append('desc',desc);
    formData.append('file',f);
    formData.append('title',title);
    return this.http.put<any>(this.base_url + `update/note/${id}`,formData);


  }



}
