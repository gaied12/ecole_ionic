import { SubService } from './../../sub-service/sub.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-consult-prof',
  templateUrl: './consult-prof.page.html',
  styleUrls: ['./consult-prof.page.scss'],
})
export class ConsultProfPage implements OnInit {
  listProf:any[]=[];

  constructor(private service:SubService,private alert:AlertController,private menu:MenuController) {
    this.menu.enable(true,'second');

   }

  ngOnInit() {
    this.service.allProf().subscribe(result=>{
      this.listProf=result
      console.log(this.listProf)

    })
  }
  async del(x:any){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      subHeader: '',
      message: 'vous voulez Supprimer cette emploi de temps ',
      buttons: [
        {text:'Confirmer',handler: () => {
          this.delEmp(x);



  }
  },
        {text:'Annuler'},

    ]


    }
    );



    await alert.present();



    }
    delEmp(x:any){
      this.service.delEmp(x).subscribe(res=>{
        console.log(res);
        window.location.reload();


      });

    }


}
