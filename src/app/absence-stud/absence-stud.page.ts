import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-absence-stud',
  templateUrl: './absence-stud.page.html',
  styleUrls: ['./absence-stud.page.scss'],
})
export class AbsenceStudPage implements OnInit {
listAbsence:any[]=[];
stud:any;
  constructor(private studService:StudentService,private rou:ActivatedRoute,private menu: MenuController) {
    this.menu.enable(false,'second');
    this.menu.enable(true,'first');


  }

  ngOnInit() {
    var id = this.rou.snapshot.paramMap.get('id');
    this.studService.getStud(id).subscribe(res => {

      this.stud=res;
    })
    this.studService.getAbsByStud(id).subscribe(res => {


      this.listAbsence=res;
    })

  }
  getdate(x:any) {
    var date = new Date()
    date.setHours(+x.substr(0,2))
    date.setMinutes(+x.substr(3,2))
    return date;
  }
  getImg(x:any){
    if(x!==null){
      return "data:image/jpeg;base64,"+x;

    }
    else{
      return "assets/images/user.jpg"
    }

  }

}
