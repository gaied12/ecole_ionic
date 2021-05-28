import { PushserviceService } from './../pushservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.page.html',
  styleUrls: ['./notif.page.scss'],
})
export class NotifPage implements OnInit {
fN:FormGroup;
  constructor(private fb:FormBuilder,private menu:MenuController,private alert:AlertController,private service:PushserviceService) {
    this.menu.enable(true,'second');
    this.fN=this.fb.group({

    msg:['',Validators.required]

    })
   }

  ngOnInit() {
  }
  async AlertConfirm() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',

      message: ' Voulez vous envoyer cette notification à tous les utilisateurs',
      buttons: [
        {
          text: 'Annuler',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmer',
          handler: () => {
            this.addNotif();
          }
        }
      ]
    });

    await alert.present();
  }

  addNotif(){

    this.service.pushUsers(this.fN.get('msg').value).subscribe(result =>{

      console.log(result);
    }


      )

  }

}
