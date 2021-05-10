import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-consult-fils',
  templateUrl: './consult-fils.page.html',
  styleUrls: ['./consult-fils.page.scss'],
})
export class ConsultFilsPage implements OnInit {
  son:any;
  file:File;

  constructor(private menu: MenuController,private studservice:StudentService,private route:ActivatedRoute) {
    this.menu.enable(true,'first')
    this.menu.enable(false,'second')
    var parent=JSON.parse(localStorage.getItem('user'));


   }

  ngOnInit() {
    var idSon=this.route.snapshot.paramMap.get('id');
    this.studservice.getStud(idSon).subscribe(data => {
      this.son=data;
    })
  }
  down(x:any){
    window.location.href=x;
  }

  getImg(x:any){
    return "data:image/jpeg;base64,"+x;


  }

}
