import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MatValidator } from '../mat-validator';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.page.html',
  styleUrls: ['./sanction.page.scss'],
})
export class SanctionPage implements OnInit {
  fS:FormGroup;
  listStudent:any[]=[];
  listSanctions:any[]=[]

  constructor(private fb:FormBuilder,private matVAlid:MatValidator,private serviceStudent:StudentService,private alert:AlertController) {
    this.fS=this.fb.group({
      matStud : ['',[Validators.required,this.matVAlid.ValidateMat()]],
      desc:['',Validators.required],
      idSacntion:['',Validators.required]


   })
   
  

  }
  infoStud(){
    return this.getInfo(this.fS.get('matStud').value);

     
   


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
    


  ngOnInit() {
    this.getAllStudents();  
console.log(this.listStudent)
this.allSanc();

  }
  getAllStudents(){
    this.serviceStudent.getAllStudents().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.listStudent[i]=res[i];
      }   
  
     
          })  
  
  
        }
  allSanc(){
    this.serviceStudent.getAllsanc().subscribe(res => {
this.listSanctions=res;

      console.log(this.listSanctions);
    })
  }
  add(){
    console.log(this.fS.value)
    this.serviceStudent.addSanc(this.fS.value).subscribe(res =>{

console.log(res)
      window.location.reload();
    })

  }
  async addSanc(){
  const alert = await this.alert.create({
    cssClass: 'my-custom-class',
    header: 'Ajouter Actualités',
    subHeader: '',
    message: 'vous voulez Ajouter cet  Sanction',
    buttons: [
      {text:'Confirmer',handler: () => {

this.add()  ;}
},
      {text:'Annuler',handler: () => {
        console.log(this.fS.valid)
      }
      },

  ]
  });

  await alert.present();
}

}
