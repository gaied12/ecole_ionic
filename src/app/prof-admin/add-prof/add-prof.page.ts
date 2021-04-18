import { SubService } from './../../sub-service/sub.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prof',
  templateUrl: './add-prof.page.html',
  styleUrls: ['./add-prof.page.scss'],
})
export class AddProfPage implements OnInit {
fP:FormGroup;
listSub:any[]=[];
  constructor(private fb:FormBuilder,private alert:AlertController,private sub:SubService,private auth:AuthService ,private router:Router) {
    this.fP = fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      idSubject:[+'',Validators.required],
      phoneNum:['',Validators.required]

    })
   }
   async add() {
  
    const alert = await this.alert.create({
      message: 'vous voulez Ajouter cet  Ensignant',
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
  }
  addProf(){
    console.log(this.fP.value)

    this.auth.addProf(this.fP.value).subscribe(result=>{
      console.log(result)
      this.router.navigate(['/consult-prof'])



    })
  }

}