import { Class } from 'src/app/Model/class';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/service-student/student.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Student } from '../Model/student';
import { Router } from '@angular/router';



@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.page.html',
  styleUrls: ['./student-register.page.scss'],
})
export class StudentRegisterPage implements OnInit {
  fStudent:FormGroup;
  class:Class[]=[];
  stud:Student;
  id:string="" ;




  constructor(private fb:FormBuilder,private service:StudentService,private alert:AlertController,private menu:MenuController,private route:Router) {
    this.menu.enable(true,'second');
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
    }
    async presentAlert() {
      const alert = await this.alert.create({
        cssClass: 'my-custom-class',
        header: 'MATRICULE',
        subHeader: '',
        message: 'le matricule de cette élève:'+ this.id,
        buttons: ['OK']
      });

      await alert.present();
    }







  ngOnInit() {
    this.service.allClass().subscribe(res=> {
      this.class=res;

     console.log(this.class);

         });



  }
  addStud(){
    this.service.addStud(this.fStudent.value).subscribe(res=>{
      this.stud=res ;
     this.id= this.stud.id;

     this.presentAlert();

      console.log(this.id);


  });
}
openMenu(){
  this.menu.open('second');
}
navigateTo(){
  this.route.navigateByUrl('consulter-stud');

}

}
