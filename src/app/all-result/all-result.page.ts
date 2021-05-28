import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service-student/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-result',
  templateUrl: './all-result.page.html',
  styleUrls: ['./all-result.page.scss'],
})
export class AllResultPage implements OnInit {
  listRes:any[]=[]
  constructor(private menu: MenuController,private service:StudentService,private rou:ActivatedRoute) {
    var user=  JSON.parse(localStorage.getItem('user'));
    if(user.role=="ADMIN"){
      this.menu.enable(true,'second');


    }
    if(user.role=="PARENT"){
      this.menu.enable(true,'first');


    }
   }

  ngOnInit() {
    this.service.allResults(this.rou.snapshot.paramMap.get('id')).subscribe(result =>{
      this.listRes = result;



    })


  }
  down(x:any){
    window.location.href=x;

  }

}
