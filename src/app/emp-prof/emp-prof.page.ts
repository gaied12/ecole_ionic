import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { SubService } from '../sub-service/sub.service';

@Component({
  selector: 'app-emp-prof',
  templateUrl: './emp-prof.page.html',
  styleUrls: ['./emp-prof.page.scss'],
})
export class EmpProfPage implements OnInit {

  fTab:FormGroup;
  x:any;
  f:File;

  constructor(private fb:FormBuilder,private rou:ActivatedRoute,private alert:AlertController,private service:SubService,private menu:MenuController) {
this.menu.enable(true,'second');
    this.fTab=this.fb.group({
      idProf : [this.rou.snapshot.paramMap.get('id'), Validators.compose([
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

  ngOnInit() {}
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


  this.service.addEmp(this.f,this.fTab.get('idProf').value,this.fTab.get('title').value,this.fTab.get('desc').value).subscribe(result=>{
      console.log(result);

    })



  }

}
