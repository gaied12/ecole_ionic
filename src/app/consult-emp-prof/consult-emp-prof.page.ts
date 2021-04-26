import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-consult-emp-prof',
  templateUrl: './consult-emp-prof.page.html',
  styleUrls: ['./consult-emp-prof.page.scss'],
})
export class ConsultEmpProfPage implements OnInit {
  emp:any
  datePub:Date;

  constructor(private menu:MenuController,private service:AuthService, private datepipe:DatePipe) {
    this.menu.enable(true,'prof');
    this.menu.enable(false,'first');
    this.menu.enable(false,'second');

   }
   date(x:any){

   let data=x;
    var date = new Date();
    date.setFullYear(+data.substr(6,4));
    date.setMonth(+data.substr(3,2));
    date.setDate(+data.substr(0,2));
return date;
  }

  ngOnInit() {
  var user=JSON.parse(localStorage.getItem('user'));
    this.service.getUser(user.id).subscribe(res => {
      this.emp=res.timeTable;
      console.log(this.emp);
      this.datePub=this.date(this.emp.file.Datecreation);




    })
  }
  down(x:any){
    window.location.href=x;
  }


}
