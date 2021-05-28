import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.page.html',
  styleUrls: ['./add-result.page.scss'],
})
export class AddResultPage implements OnInit {
fR:FormGroup;
file:File;
  constructor(private menu:MenuController,private fb:FormBuilder,private rou:ActivatedRoute,private alert:AlertController,private service:StudentService) {
    var id=this.rou.snapshot.paramMap.get('id');
    this.fR=this.fb.group({
     title:['',Validators.required],
      file:['',Validators.required],

      mat:[id,Validators.required]


    })
    this.menu.enable(true,'second');

   }
   getFile(event){
     this.file=event.target.files[0];
   }
  ngOnInit() {
  }
  async AlertConfirm() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Confirmer',
      message: 'vous Voulez Ajouter cet Résultat',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmer',
          handler: () => {
            this.add();
          }
        }
      ]
    });

    await alert.present();
  }

  add( ){
    this.fR.controls['file'].setValue(this.file);


    console.log( this.fR.value)
    this.service.addResult(this.fR.value).subscribe(result => {

      console.log( result);
    })
  }

}
