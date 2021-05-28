import { StudentService } from './../service-student/student.service';
import { MettingService } from './../metting.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-consult-metting-parent',
  templateUrl: './consult-metting-parent.page.html',
  styleUrls: ['./consult-metting-parent.page.scss'],
})
export class ConsultMettingParentPage implements OnInit {
  data:any
  listofMetting:any[]=[];
  idStud:any;
  stud:any;

  constructor(private menu:MenuController,private router:Router ,private MettingService:MettingService ,private rou:ActivatedRoute,private studSer:StudentService) {

    this.menu.enable(true, 'first');
    this.menu.enable(false, 'second');
    this.menu.enable(false, 'prof');



   }

  ngOnInit() {
    this.MettingService.getStud().subscribe(result=>{
      this.idStud=result;
      this.getStud();
      var parentId=this.rou.snapshot.paramMap.get('idParent');
      this.MettingService.getMettingByParent(parentId,this.idStud).subscribe(data => {
        this.listofMetting=data;
        console.log(data);

      })

    })


  }
  getImg(x:any){
    if(x!==null){
      return "data:image/jpeg;base64,"+x;

    }
    else{
      return "assets/images/stud.png"
    }

  }
  card(){

    return '8px solid #7f8c8d' ;
  }



  color(x:any){
    if(x=='ACCEPTED'){
    return '#009432';
  }
  if(x=='PENDING'){
  return '#F79F1F';
  }
  if(x=='CANCEL'){
    return '#EA2027';
    }
}
getStud(){
  this.studSer.getStud(this.idStud).subscribe(result=>{
    this.stud=result;
    console.log(this.stud)
  })


}




}
