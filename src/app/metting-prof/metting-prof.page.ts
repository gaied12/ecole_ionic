import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ClassService } from '../class-service/class.service';
import { MettingService } from '../metting.service';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-metting-prof',
  templateUrl: './metting-prof.page.html',
  styleUrls: ['./metting-prof.page.scss'],
})
export class MettingProfPage implements OnInit {
  listofMeet:any[]=[];
  listofLevel:any[]=[];
  filterlist:any[]=[];
  levelId:any;

  constructor(private menu:MenuController, private levelservice:StudentService,private mettService: MettingService,private ro:ActivatedRoute) {
    this.menu.enable(true,'prof');
    this.menu.enable(false,'first');
    this.menu.enable(true,'secons');

  }

  ngOnInit() {
    this.levelservice.allClass().subscribe(data =>{

      this.listofLevel=data;

    })
    this.allmett();

  }
  allmett(){
    var idProf=+this.ro.snapshot.paramMap.get('idProf');

    this.mettService.allMetting(idProf).subscribe(data =>{
      this.listofMeet=data;
      this.filterlist=this.listofMeet;
      console.log(this.filterlist);
    })


  }
  serachByLevel(){
    var filter =this.listofMeet.filter(x=>x.son.level.id ===this.levelId);
    this.filterlist=filter;
return this.filterlist;
  }
  accept(x:any) {
this.mettService.accptMett(x).subscribe(data =>{
  this.allmett();
})
  }
  cancel(x:any) {
    this.mettService.cancelMett(x).subscribe(data =>{
      console.log(data);
      this.allmett();

    })

  }


}
