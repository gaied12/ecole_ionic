import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MatValidator } from '../mat-validator';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-parent-add-fils',
  templateUrl: './parent-add-fils.page.html',
  styleUrls: ['./parent-add-fils.page.scss'],
})
export class ParentAddFilsPage implements OnInit {
fSon:FormGroup;
listStudent:any[]=[];

  constructor(private matVAlid:MatValidator,private fb:FormBuilder,private serviceStudent:StudentService,private menu:MenuController,private router:Router) {
    this.menu.enable(true,'first');


this.fSon=this.fb.group({
  matStud : ['',[Validators.required,this.matVAlid.ValidateMat()]],



})
   }

   infoStud(){
    return this.getInfo(this.fSon.get('matStud').value);





    }
    getInfo(mat:string) :String {
      let x=this.listStudent.find(x=>x.id==mat);
      console.log(x)
      if(x!==undefined){
        return x.firstName + ' ' + x.lastName


      }else{
        return '';
      }
    }
    getAllStudents(){
      this.serviceStudent.getAllStudents().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          this.listStudent[i]=res[i];
        }


            })


          }


  ngOnInit() {
    this.getAllStudents();
  }
  add(){
    var user = JSON.parse(localStorage.getItem('user'));
    this.serviceStudent.addSon(user.id,this.fSon.get('matStud').value).subscribe(res => {


      console.log(res);
      this.router.navigateByUrl('/consult-fils');
    })


  }

}
