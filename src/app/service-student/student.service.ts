import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Class } from 'src/app/Model/class';
import { Observable } from 'rxjs';
import { Student } from 'src/app/Model/student';
import { environment } from 'src/environments/environment';
import { AbstractControl, ValidatorFn } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  base_url= environment.base_url;


  constructor(private http:HttpClient) { }
  allClass():Observable<Class[]> {
    return this.http.get<Class[]>(this.base_url+'all/class');

  }
  getStud(id:string):Observable<Student>{
    return this.http.get<Student>(this.base_url+`student/${id}`);

  }
  addStud(student:any):Observable<Student>{

    return this.http.post<Student>(this.base_url+'add/student',student);
  }
  getStudents(id:any):Observable<Student[]> {
    return this.http.get<Student[]>(this.base_url+`students/level?levelId=${id}`);


}
delteStudent(id:string){
  return this.http.delete(this.base_url+`delete/student/${id}`);

}
getclassId(id:string):Observable<number>{
  return this.http.get<number>(this.base_url+`students/level/${id}`)
}
getClass(id:number):Observable<Class>{
  return this.http.get<Class>(this.base_url+`get/level/${id}`);
}
updStud(id:string,stud:any):Observable<Student>{
 return this.http.post<Student>(this.base_url+`/update/student/${id}`,stud);

}
getAbsByStud(id:string):Observable<any[]>{
  return this.http.get<any[]>(this.base_url+`/all/Abs/${id}`);
}
getAbsByDate(id:string,date:string):Observable<any[]>{
  let params = new HttpParams();

  params=params.append('date', date);
  params=params.append('id',id);



  return this.http.get<any[]>(this.base_url+`all/AbsByDate`, {params: params});
}
verify(id:string):Observable<any>{
  return this.http.get<any[]>(this.base_url+`stud/Verf/${id}`);


}
getAllStudents():Observable<Student[]> {
  return this.http.get<Student[]>(this.base_url+`stud/all`);


}
getAllsanc():Observable<any>{
  return this.http.get<any[]>(this.base_url+`all/sanctionType`);


}
addSanc(data:any):Observable<any>{
  return this.http.post<any>(this.base_url+'add/sanction',data);
}
allSonByParent(id:number):Observable<any[]>{
  return this.http.get<any[]>(this.base_url+`stud/all/${id}`);



}
updImg(file:File, id:string):Observable<any>{
  var data=new FormData();
  data.append('img', file);
  data.append('id',id);

  return this.http.post<any>(this.base_url+'stud/img',data);



}
allProfbyLevel(id:number):Observable<any[]>{

  return this.http.get<any[]>(this.base_url+`get/prof/${id}`);
}
allSancbyStudent(id:string):Observable<any[]>{

  return this.http.get<any[]>(this.base_url+`all/sanction/stud/${id}`);
}







}
