import { MettingService } from './../metting.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-consult-metting-parent',
  templateUrl: './consult-metting-parent.page.html',
  styleUrls: ['./consult-metting-parent.page.scss'],
})
export class ConsultMettingParentPage implements OnInit {
  data:any
  listofMetting:any[]=[];

  constructor(private menu:MenuController,private router:Router ,private MettingService:MettingService ,private rou:ActivatedRoute) {

    this.menu.enable(true, 'first');
    this.menu.enable(false, 'second');
    this.menu.enable(false, 'prof');
    var object=this.router.getCurrentNavigation().extras.state;
    this.data=object;
    console.log(this.data)



   }
   navigate(){
     this.router.navigate(['/metting-parent',this.data.idLevel,this.data.idStud])
   }

  ngOnInit() {
    var parentId=this.rou.snapshot.paramMap.get('idParent');
    this.MettingService.getMettingByParent(parentId,this.data.idStud).subscribe(data => {
      this.listofMetting=data;
      console.log(data);
    })
  }

  color(x:any){
    if(x=='ACCEPTED'){
    return '#009432';
  }
  if(x=='PENDING'){
  return '#F79F1F';
  }
  if(x=='CANCEL'){
    return '#EA2027';
    }
}

}
