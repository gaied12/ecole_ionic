import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-sanction-stud',
  templateUrl: './sanction-stud.page.html',
  styleUrls: ['./sanction-stud.page.scss'],
})
export class SanctionStudPage implements OnInit {
  listSanction:any[]=[];
  stud:any;

  constructor(private service:StudentService,private rou:ActivatedRoute,private menu: MenuController) {
    this.menu.enable(true,'first');
    this.menu.enable(false,'second');

   }

  ngOnInit() {
    var id=this.rou.snapshot.paramMap.get('id');
    this.service.allSancbyStudent(id).subscribe(res =>{

      this.listSanction = res;
      console.log(this.listSanction,this.listSanction.length)
    })
    this.service.getStud(id).subscribe(res=>{

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





}
