import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ClassService } from 'src/app/class-service/class.service';

@Component({
  selector: 'app-consult-emp',
  templateUrl: './consult-emp.page.html',
  styleUrls: ['./consult-emp.page.scss'],
})
export class ConsultEmpPage implements OnInit {
id:number;
emp:any;
newDate:Date;
type:any='';

  constructor(private rou:ActivatedRoute,private service:ClassService,private menu:MenuController) {
    this.menu.enable(true,'second');

   }

  ngOnInit() {
    this.id=+this.rou.snapshot.paramMap.get('id');
    console.log(this.id);
    this.service.OwnerTtable(this.id).subscribe(data => {

console.log(JSON.stringify(data) )
      this.type = data;

    })

    this.service.getEmp(this.id).subscribe(result =>{
      this.emp=result;
      var x=+this.emp.file.Datecreation.substr(3,2);

      this.newDate=new Date(this.emp.file.Datecreation.substr(6,4),x-1,this.emp.file.Datecreation.substr(0,2),this.emp.file.Datecreation.substr(10,3),this.emp.file.Datecreation.substr(14,2));
      this.newDate.setHours(this.newDate.getHours()+1)
     console.log( this.emp);

    })

  }
  down(x:any) {
    window.location.href=x
  }

}
