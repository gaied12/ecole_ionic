import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MettingService } from '../metting.service';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-metting-parent',
  templateUrl: './metting-parent.page.html',
  styleUrls: ['./metting-parent.page.scss'],
})
export class MettingParentPage implements OnInit {
profs:any[]=[];
idProf:any;
fM:FormGroup;

  constructor(private service:StudentService,private rou:ActivatedRoute,private fb:FormBuilder,private pipe:DatePipe,private serviceMeet:MettingService) {
  var user=  JSON.parse(localStorage.getItem('user'));
    this.fM = this.fb.group({
      date:['', Validators.required],
      studId:[this.rou.snapshot.paramMap.get('studId'), Validators.required],
      parentId:[user.id, Validators.required],
      profId:[+'', Validators.required],
     time:['', Validators.required],


    })
   }

  ngOnInit() {
    this.service.allProfbyLevel(+this.rou.snapshot.paramMap.get('id')).subscribe(data=>{

      this.profs=data;
    })
  }
  add(){
    var time = new Date(this.fM.get('time').value)

let data=this.fM.value;
delete data.time
data.date=this.pipe.transform(this.fM.get('date').value, 'yyyy-MM-dd')
data.hM=time.getHours();
data.mM=time.getMinutes();

    console.log(data)
    this.serviceMeet.addMetting(data).subscribe(data=>{


      console.log(data)
    })
  }

}
