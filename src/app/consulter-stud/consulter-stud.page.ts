import { StudentService } from 'src/app/service-student/student.service';
import { Component, OnInit } from '@angular/core';
import { Class } from '../Model/class';
import { Student } from '../Model/student';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-consulter-stud',
  templateUrl: './consulter-stud.page.html',
  styleUrls: ['./consulter-stud.page.scss'],
})
export class ConsulterStudPage implements OnInit {
  class:Class[]=[];
  clasId:number;
  students:any[]=[]   ;
  level:any;
  error=false;


  constructor(private service:StudentService, private route:ActivatedRoute,private rou:Router,private alert:AlertController,private menu:MenuController) {
    this.menu.enable(true,'second');

   }
  ngOnInit() {

    this.service.allClass().subscribe(res=> {
      this.class=res;


         });











  }
  deleteStud(x:string){
   this.service.delteStudent(x).subscribe(res =>{

    this.StudbyLevel();
   });



  }

  StudbyLevel(){
    this.service.getStudents(this.clasId).subscribe(res=> {
      this.students = res;



    })

  }
  getStudents(){
    if(this.clasId==null){
      this.error=true;


    }else{
      this.service.getStudents(this.clasId).subscribe(res=> {
        this.students = res;
        console.log(this.students)

      })
      this.getClass();
      console.log(this.level)


    }
    console.log(this.error)

  }
  getClass(){
    this.service.getClass(this.clasId).subscribe(res=>{
      this.level=res;
      console.log(this.level);

    })
  }
  numStud(x:number){
    if (x==0){
      return 'Aucun'
    }else
    return x;
  }
  style(x:number){
    if(x==0){
      return '#ff3838';
    }
    else
    return '#303952';
  }
  async del(x:string) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Supprimer',
      subHeader: '',
      message: 'vous voulez supprimer cette élève:'+ x,
      buttons: [
        {text:'Confirmer',handler: () => {

this.deleteStud(x);
}
},
        {text:'Annuler'},

    ]
    });

    await alert.present();
  }
  test(){

    console.log(this.clasId);
  }



}
