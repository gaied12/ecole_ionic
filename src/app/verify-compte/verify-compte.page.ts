import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-verify-compte',
  templateUrl: './verify-compte.page.html',
  styleUrls: ['./verify-compte.page.scss'],
})
export class VerifyComptePage implements OnInit {
  data:any;
  fR:FormGroup;
  code:string;

  constructor(private router: ActivatedRoute,private rou:Router,private auth:AuthService,private alert:AlertController) {


  }

  ngOnInit() {
    this.data=this.getData();
console.log(this.data);
    this.auth.addCode(this.router.snapshot.paramMap.get('email'),this.router.snapshot.paramMap.get('id')).subscribe(result => {
      console.log(result);
    })


  }
  async info() {
    const alert = await this.alert.create({

      message: 'votre code est incorrect',
      buttons: [
        {text:'ok',handler: () => {
          return;

 ;}
},

    ]
    });

    await alert.present();
  }
  register(){
   var x=JSON.parse(this.data);
    x.code=this.code;

console.log(x);



   this.auth.addParent(x).subscribe(result => {
     if(result.code === '99999'){
       this.info();


     }
     else{
      localStorage.setItem('user',JSON.stringify(result) )
      window.location.href = '/home-parent';

     }


    })



  }
  genCode(){
    window.location.reload();

  }
  getData():any{
   return localStorage.getItem('dataReq');


  }

}
