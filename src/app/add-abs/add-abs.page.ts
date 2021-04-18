import { Abs } from './../Model/abs';
import { SubService } from './../sub-service/sub.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-add-abs',
  templateUrl: './add-abs.page.html',
  styleUrls: ['./add-abs.page.scss'],
})
export class AddAbsPage implements OnInit {
fAbs:FormGroup;
stud:any;
abs:Abs=new Abs();
subjects:any[];
id:any;

  constructor(private fb:FormBuilder,private service:SubService,private route:ActivatedRoute,private  datepipe: DatePipe,private alertController:AlertController,private serStud:StudentService  ) {
    this.fAbs=this.fb.group({
      start:['',Validators.required],
      end:['',Validators.required],
      date:[new Date(), Validators.required],
      mat:['',Validators.required]




    })
   }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.serStud.getStud(this.id).subscribe(res => {
      this.stud=res;
      console.log(this.stud);
    })
    this.service.allSub().subscribe(result => {
this.subjects=result;
      console.log(this.subjects);
    })

    
  }
  async addAbs() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: 'Vous Voulez ajouter cet absence',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            return;
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

  add(){
   // var date=new Date(this.fAbs.get('start').value);
   // console.log(date.getHours())
   // console.log(this.fAbs.value)
let dateAbs=new Date(this.fAbs.get('date').value);

   this.abs.dateAbs=this.datepipe.transform(dateAbs, 'yyyy-MM-dd');
   var dateS=new Date(this.fAbs.get('start').value)
   this.abs.hStart=dateS.getHours();
   this.abs.mstart=dateS.getMinutes();
   var dateE=new Date(this.fAbs.get('end').value)
   this.abs.hEnd=dateE.getHours();
   this.abs.mend=dateE.getMinutes();
this.abs.idStud=this.id;
this.abs.idSubj=this.fAbs.get('mat').value

   
   console.log(this.abs);
   this.service.addAbs(this.abs).subscribe(result => {
     console.log(result)
   }
    )
  }


}
