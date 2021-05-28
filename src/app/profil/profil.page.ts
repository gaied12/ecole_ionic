import { AlertController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
fupd:FormGroup;
user:any ;
url: any;
file:File;
x:any;
img:any;
  constructor(private alert:AlertController,private fb:FormBuilder,private service:AuthService,private menu:MenuController,private router:Router) {
    var user=JSON.parse(localStorage.getItem('user'));
if (user.role=='PARENT') {
  this.menu.enable(true,'first');

}
if (user.role=='TEACHER') {
  this.menu.enable(true,'prof');

}

    this.fupd=this.fb.group({
      lastName: ['',Validators.required],
      firstName: ['',Validators.required],
      phoneNum: ['',Validators.required],
      email: ['',Validators.required],
      file:[this.file,Validators.required],


    })
    this.service.getUser(user.id).subscribe(res=>{
      this.user=res;
      console.log(this.user)

      this.fupd.setValue({lastName:this.user.lastName,firstName:this.user.firstName,phoneNum:this.user.phoneNum,email:this.user.email,file:null})
      this.img=this?.user?.imageUser?.picByte;




    })

  }
  ngOnInit() {




  }
  onFileChanged(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
       this.file = event.target.files[0];
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.url = reader.result;
        console.log(this.url)
      };
    }
  }
  async AlertConfirm() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',

      message: ' Voulez vous modifier vos coordonnées',
      buttons: [
        {
          text: 'Annuler',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmer',
          handler: () => {
            this.update();
          }
        }
      ]
    });

    await alert.present();
  }
  update(){
    var data =this.fupd.value;
    data.id=this.user.id;
    data.file=this.file;
    console.log(data);
    this.service.updateUser(data).subscribe(data =>{

      console.log(data)
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(data));
      window.location.href=this.router.url;

    })


  }
  imageUser(x:any){
    var user=  JSON.parse(localStorage.getItem('user'));

    if(user.role=="PARENT"){
      if(x==null){
        return 'assets/images/user.jpg'
      }

      else{
        return "data:image/jpeg;base64,"+x;

      }

    }
    if(user.role=="TEACHER"){
      if(x==null){
        return 'assets/images/prof.png'
      }

      else{
        return "data:image/jpeg;base64,"+x;

      }

    }

  }


}
