import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-fils-selection',
  templateUrl: './fils-selection.page.html',
  styleUrls: ['./fils-selection.page.scss'],
})
export class FilsSelectionPage implements OnInit {
  id:any
  listSon:any[]=[];

  constructor(private menu:MenuController,private studservice:StudentService) {
    this.menu.enable(true,'first');
    var parent=JSON.parse(localStorage.getItem('user'));
    this.id=parent.id;


   }

  ngOnInit() {
    this.studservice.allSonByParent(this.id).subscribe(data => {
      this.listSon=data;
      console.log(this.listSon,this.listSon.length)




    })
  }
  getImg(x:any){
    return "data:image/jpeg;base64,"+x;


  }


}
