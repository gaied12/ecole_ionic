import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-profil-stud',
  templateUrl: './profil-stud.page.html',
  styleUrls: ['./profil-stud.page.scss'],
})
export class ProfilStudPage implements OnInit {
  stud:any
  id:any;
  file:File;
  url:any;

  constructor(private serviceStud:StudentService,private rou:ActivatedRoute, private menu: MenuController) {
    this.menu.enable(true,'first')
    this.id=this.rou.snapshot.paramMap.get('id');
    console.log(this.id)
   }

  ngOnInit() {

    this.serviceStud.getStud(this.id).subscribe(res =>{
      this.stud=res;
      this.url=this.stud?.imageUser?.picByte;
      console.log(this.url);


    })
  }
  getImg(x:any){
    return "data:image/jpeg;base64,"+x;






  }
  /*changeImg(event){
    this.file=event.target.files[0];
    console.log(this.file)
    this.serviceStud.updImg(this.file,this.id).subscribe(res =>{
      window.location.reload();


    })
  }*/
  changeImg(event){
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
       this.file = event.target.files[0];
       console.log(this.file)
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.url = reader.result;
    this.serviceStud.updImg(this.file,this.id).subscribe(res=>{

          window.location.reload();
        })
      };
    }
  }

}
