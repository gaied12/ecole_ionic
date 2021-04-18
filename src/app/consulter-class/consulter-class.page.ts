import { Class } from 'src/app/Model/class';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service-student/student.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ClassService } from '../class-service/class.service';

@Component({
  selector: 'app-consulter-class',
  templateUrl: './consulter-class.page.html',
  styleUrls: ['./consulter-class.page.scss'],
})
export class ConsulterClassPage implements OnInit {
 level:any[]=[];

  constructor(private service:StudentService,private router:Router,private alert:AlertController,private classervice:ClassService ) { 
    
  }

  ngOnInit() {
    this.service.allClass().subscribe(result=>{
      this.level=result;
      console.log(this.level);
      
    })
  }
  down(x:any){
    
    window.location.href=x;
  }
  cons(x:any){
console.log(x)
  }
 async del(x:any){
  const alert = await this.alert.create({
    cssClass: 'my-custom-class',
    header: 'Ajouter Emploi de temps',
    subHeader: '',
    message: 'vous voulez Supprimer cette emploi de temps ',
    buttons: [
      {text:'Confirmer',handler: () => {
        this.delEmp(x);
       


}
},
      {text:'Annuler'},

  ]
  

  }
  );



  await alert.present();


    
  }
  delEmp(x:any){
    this.classervice.delEmp(x).subscribe(res=>{
      console.log(res);
      window.location.reload();


    });

  }
  
    
  

}
