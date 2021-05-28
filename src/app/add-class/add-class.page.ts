import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ClassService } from '../class-service/class.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.page.html',
  styleUrls: ['./add-class.page.scss'],
})
export class AddClassPage implements OnInit {
  fLevel:FormGroup;

  constructor(private fb:FormBuilder,private service:ClassService,private alert:AlertController) {
    this.fLevel=this.fb.group({

  level :['',Validators.required]

    })
   }

  ngOnInit() {
    console.log(this.fLevel.value);
  }

  async add() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Ajouter',
      subHeader: '',
      message: ' Voulez vous ajouter cette classe ' ,
      buttons: [
        {text:'Confirmer',handler: () => {

this.addClass() ;  }
},
        {text:'Annuler'},

    ]
    });

    await alert.present();
  }
  addClass(){
    console.log(this.fLevel.get('level').hasError('required'));
console.log(this.fLevel.get('level').value);
    this.service.addClass(this.fLevel.get('level').value).subscribe(result=>{

      console.log(result);
      window.location.reload();
    })

  }
  Cancel(){
    this.fLevel.reset();
  }

}
