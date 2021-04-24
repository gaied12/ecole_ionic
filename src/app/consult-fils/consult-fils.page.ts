import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-consult-fils',
  templateUrl: './consult-fils.page.html',
  styleUrls: ['./consult-fils.page.scss'],
})
export class ConsultFilsPage implements OnInit {
  id:number;
  listSon:any[]=[];
  file:File;

  constructor(private menu: MenuController,private studservice:StudentService) {
    this.menu.enable(true,'first')
    this.menu.enable(false,'second')
    var parent=JSON.parse(localStorage.getItem('user'));
    this.id=parent.id;


   }

  ngOnInit() {
    this.studservice.allSonByParent(this.id).subscribe(data => {
      this.listSon=data;
      console.log(this.listSon,this.listSon.length)




    })
  }
  down(x:any){
    window.location.href=x;
  }

  getImg(x:any){
    return "data:image/jpeg;base64,"+x;


  }

}
