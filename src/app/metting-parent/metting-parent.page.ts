import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { MettingService } from '../metting.service';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-metting-parent',
  templateUrl: './metting-parent.page.html',
  styleUrls: ['./metting-parent.page.scss'],
})
export class MettingParentPage implements OnInit {
profs:any[]=[];
idProf:any;
fM:FormGroup;
idParent:any;
idStud:any;
idLevel:any;
stud:any;

  constructor(private service:StudentService,private rou:ActivatedRoute,private fb:FormBuilder,private pipe:DatePipe,private serviceMeet:MettingService,private alert:AlertController,private menu:MenuController,private router:Router) {
 this.menu.enable(true,'first');
 this.menu.enable(false,'second');
 this.menu.enable(false,'prof');
 this.idStud=this.rou.snapshot.paramMap.get('studId');
 this.idLevel=+this.rou.snapshot.paramMap.get('id');
    var user=  JSON.parse(localStorage.getItem('user'));
    this.idParent=user.id;

    this.fM = this.fb.group({
      date:['', Validators.required],
      studId:[this.rou.snapshot.paramMap.get('studId'), Validators.required],
      parentId:[user.id, Validators.required],
      profId:[+'', Validators.required],
     time:['', Validators.required],


    })
this.serviceMeet.setStud(this.idStud);

   }

  ngOnInit() {
    this.service.getStud(this.idStud).subscribe(res=>{

      this.stud=res;
    })
    this.service.allProfbyLevel(+this.rou.snapshot.paramMap.get('id')).subscribe(data=>{

      this.profs=data;
    })
  }
  add(){
    var time = new Date(this.fM.get('time').value)

let data=this.fM.value;
delete data.time
data.date=this.pipe.transform(this.fM.get('date').value, 'yyyy-MM-dd')
data.hM=time.getHours();
data.mM=time.getMinutes();

data.levelId=+this.rou.snapshot.paramMap.get('id');
    console.log(data)
    this.serviceMeet.addMetting(data).subscribe(data=>{


      console.log(data)
    })
  }
  async addMetting(){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      subHeader: '',
      message: 'Voulez vous Confirmer cet rendez-vous ',
      buttons: [
        {text:'Confirmer',handler: () => {
          this.add();
          window.location.reload();}
  },
        {text:'Annuler'},

    ]


    }
    );



    await alert.present();



    }

    navigate(){
      this.router.navigateByUrl(`/consult-metting-parent/${this.idParent}`, { state: { idStud:this.idStud , idLevel:this.idLevel } });
    }
    getImg(x:any){
      if(x!==null){
        return "data:image/jpeg;base64,"+x;


      }else{
        return "assets/images/stud.png" ;
      }
    }

}
