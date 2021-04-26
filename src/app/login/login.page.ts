import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth-service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fL:FormGroup;


  constructor(private menu: MenuController,private fb:FormBuilder,private login:AuthService,private alert:AlertController,private router:Router) {
    this.fL=this.fb.group({
     email: ['',[Validators.required,this.ValidateEmail()]],
     password:['',
      Validators.required
      ]})
this.menu.close('first');
this.menu.close('second');
this.menu.close('prof');

    this.menu.enable(false,'first');
    this.menu.enable(false,'second');
    this.menu.enable(false,'prof');



   }
   ValidateEmail() : ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {
   var email=control.value;
   if (this.isEmpty(email)) {
    return null;
  }

  const pattern = /^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

  if (!email.match(pattern)) {
   control.setErrors( { Invalid: true });
    return { Invalid: true };
  }

  return null;
   }



  }
  async Alert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',

      message: 'Email ou le mot de passe est incorrect .',
      buttons: ['OK']
    });

    await alert.present();


  }


   isEmpty(str) {
    return (!str || str.length === 0 );
}





  ngOnInit() {
    if (localStorage.getItem('user')!=null){
      let user = localStorage.getItem('user');
      var x=JSON.parse(user);
      if (x.role==='ADMIN'){
          this.router.navigate(['/home']);
    }
    if (x.role==='PARENT'){
      this.router.navigate(['/home-parent']);
}

    }

  }
  auth(){
    console.log(this.fL.get('email').hasError('Invalid'))
    this.login.auth(this.fL.get('email').value,this.fL.get('password').value).subscribe(res =>{
      console.log(res)
      if(res.code ==='98'){

        this.Alert()
      }
      else{
        if(res.role==='ADMIN'){
          localStorage.setItem('user',JSON.stringify(res) )


        this.router.navigate(['/home']);
        }
        if(res.role==='PARENT'){
          localStorage.setItem('user',JSON.stringify(res) )

          this.router.navigate(['/home-parent']);

        }
        if(res.role==='TEACHER'){
          localStorage.setItem('user',JSON.stringify(res) )

          this.router.navigate(['/home-prof']);

        }

      }


    })


  }


}
