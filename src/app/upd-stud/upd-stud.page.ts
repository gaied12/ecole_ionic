import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { Class } from '../Model/class';
import { Student } from '../Model/student';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-upd-stud',
  templateUrl: './upd-stud.page.html',
  styleUrls: ['./upd-stud.page.scss'],
})
export class UpdStudPage implements OnInit {
  fStudent:FormGroup;
  stud:Student;
  id:string;
  f:File;
  class:Class[]=[];



  constructor(private fb:FormBuilder,private service:StudentService,private alert:AlertController,private menu:MenuController,private route:ActivatedRoute) { 
    this.fStudent=this.fb.group({
      aclass : ['', Validators.compose([
        Validators.required,
       ]),
      
      ],
      dateBirth : ['', Validators.compose([
        Validators.required
       ]),
      ],
      firstName : ['', Validators.compose([
        Validators.required
       ]),
      ],
      lastName : ['', Validators.compose([
        Validators.required
       ]),
      ],
     sexe: ['', Validators.compose([
        Validators.required
       ]),
      ]
     
      
  
     });
     this.id = this.route.snapshot.paramMap.get('id');
     console.log(this.id);

  }
 

  ngOnInit() {
    this.service.allClass().subscribe(res=> {
      this.class=res;
     
     
         });
         this.service.getStud(this.id).subscribe(res=>{
           this.stud=res;
         this.fStudent.setValue({aclass:this.stud.level.name, dateBirth: this.stud.dateBirth, firstName: this.stud.firstName, lastName: this.stud.lastName, sexe: this.stud.sexe});
console.log(this.fStudent.value);

         });

         
     
  }
  updStud(){
    this.service.updStud(this.id,this.fStudent.value).subscribe(res=>{
      console.log(res);
      window.location.reload();
    })


  }

}
