import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/service-student/student.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { ClassService } from 'src/app/class-service/class.service';
import { Class } from 'src/app/Model/class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-class',
  templateUrl: './emp-class.page.html',
  styleUrls: ['./emp-class.page.scss'],
})
export class EmpClassPage implements OnInit {
  fTab:FormGroup;
  class:Class[]=[];
  x:any;
  f:File;


  constructor(private service:StudentService,private clasSer:ClassService,private fb:FormBuilder,private alert:AlertController,private router:Router,private rou:ActivatedRoute,private menu:MenuController) {
    this.menu.enable(true,'second');
    this.fTab=this.fb.group({
      classId : [this.rou.snapshot.paramMap.get('id'), Validators.compose([
      Validators.required,
     ]),

    ],
    title : ['', Validators.compose([
      Validators.required
     ]),
    ],
    desc : ['', Validators.compose([
      Validators.required
     ]),
    ],
    file : [null, Validators.compose([
      Validators.required
     ]),
    ],

    })


  }

  ngOnInit() {
this.service.allClass().subscribe(result=>{
this.class=result;
console.log(this.class)

})

  }
  getFile(x:any){
    this.f=x.target.files[0];
    console.log(this.f);


  }
  async add() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Ajouter Emploi de temps',
      subHeader: '',
      message: 'vous voulez Ajouter cet Emploi de temps',
      buttons: [
        {text:'Confirmer',handler: () => {

this.addEmp()  ;}
},
        {text:'Annuler'},

    ]
    });

    await alert.present();
  }
  addEmp(){
    console.log(this.fTab.value)


  this.clasSer.addEmp(this.f,this.fTab.get('classId').value,this.fTab.get('title').value,this.fTab.get('desc').value).subscribe(result=>{
      console.log(result);
      window.location.href = 'http://localhost:8100/consulter-class';
    })



  }
  ClasName(x:number):string{
  var name=  this.class.find(y=>y.id == x).name;


    return name;
  }

}
