import { SubService } from './../../sub-service/sub.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/auth-service/auth.service';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/class-service/class.service';
import { StudentService } from 'src/app/service-student/student.service';

@Component({
  selector: 'app-add-prof',
  templateUrl: './add-prof.page.html',
  styleUrls: ['./add-prof.page.scss'],
})
export class AddProfPage implements OnInit {
fP:FormGroup;
listSub:any[]=[];
listLevels:any[]=[]
  constructor(private fb:FormBuilder,private alert:AlertController,private sub:SubService,private auth:AuthService ,private router:Router,private classService:StudentService,private menu:MenuController ) {
    this.menu.enable(true,'second')
    this.fP = fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      subjectId:[+'',Validators.required],
      levelId: [+'',Validators.required],
      phoneNum:['',Validators.required]

    })
   }
   async add() {

    const alert = await this.alert.create({
      message: ' voulez vous Ajouter cet  Ensignant',
      buttons: [
        {text:'Confirmer',handler: () => {

this.addProf()  ;}
},
        {text:'Annuler'},

    ]
    });

    await alert.present();
  }


  ngOnInit() {
    this.sub.allSub().subscribe(result=>{
      this.listSub=result;
    })
    this.classService.allClass().subscribe(result=>{

      this.listLevels=result;
      console.log(this.listLevels)
    })
  }
  addProf(){
    console.log(this.fP.value)

   this.auth.addProf(this.fP.value).subscribe(result=>{
      console.log(result);
      window.location.reload();



    })
  }

}
