import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-profil-stud',
  templateUrl: './profil-stud.page.html',
  styleUrls: ['./profil-stud.page.scss'],
})
export class ProfilStudPage implements OnInit {
  stud:any
  id:any;
  file:File;

  constructor(private serviceStud:StudentService,private rou:ActivatedRoute) {
    this.id=this.rou.snapshot.paramMap.get('id');
    console.log(this.id)
   }

  ngOnInit() {

    this.serviceStud.getStud(this.id).subscribe(res =>{
      this.stud=res;
    })
  }
  getImg(x:any){
    if(x!==null){
      return "data:image/jpeg;base64,"+x;


    }else{
      return "assets/images/user.jpg" ;
    }
  }
  changeImg(event){
    this.file=event.target.files[0];
    console.log(this.file)
    this.serviceStud.updImg(this.file,this.id).subscribe(res =>{
      window.location.reload();


    })
  }

}
