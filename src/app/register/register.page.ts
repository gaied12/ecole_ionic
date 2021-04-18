import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController, NavParams } from '@ionic/angular';
import { AuthService } from '../auth-service/auth.service';
import { MatValidator } from '../mat-validator';
import { Student } from '../Model/student';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  x:any;
  fR: FormGroup;
matStud:string;
  infoStu:string='';
  listStudent:Student[]=[];

 
  

  constructor(private service:AuthService ,private fb:FormBuilder,private matVAlid:MatValidator,private alert:AlertController,private route:Router,  public navCtrl: NavController,private serviceStudent: StudentService  ) {
    this.fR=this.fb.group({
      matStud : ['',[Validators.required,this.matVAlid.ValidateMat()]],
      email:['',Validators.required],
      firstName :['',Validators.required],
      lastName :['',Validators.required],
      phoneNum :[null,Validators.required],
      password:['',Validators.required],
      rPassword:['',Validators.required]


    },
    {
      validator:this.ConfirmedValidator('password', 'rPassword'),
  })
   }
   infoStud(){
    return this.getInfo(this.fR.get('matStud').value);

     
   


    }


   

  ngOnInit() {
this.getAllStudents();  


console.log(localStorage.getItem('DeviceID'));


   

  }

   add() {
  
console.log(this.fR.value);

    this.route.navigate(['/verify-compte',this.fR.get('matStud').value,this.fR.get('email').value]);
    localStorage.setItem('dataReq',JSON.stringify(this.fR.value));


   
  }  
  ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
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



}