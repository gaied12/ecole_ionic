import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ClassService } from 'src/app/class-service/class.service';
import { NotesService } from 'src/app/notes-service/notes.service';
import { StudentService } from 'src/app/service-student/student.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  f:File;
fNote:FormGroup;
id:any;
x:any;
levels:any[]=[];

  constructor(private router:ActivatedRoute,private fb:FormBuilder,private alert:AlertController,private service:NotesService,private serviceL:StudentService ) {
    this.serviceL.allClass().subscribe(res=>{
      this.levels=res;
      console.log(this.levels);
    })

    this.id=this.router.snapshot.paramMap.get('id');
    console.log(this.id);
  this.fNote=  this.fb.group({ 
    title : ['', Validators.compose([
      Validators.required
     ]),
    ],
    desc : ['', Validators.compose([
      Validators.required
     ]),
    ],
    levels : ['', Validators.compose([
      Validators.required
    ])]

    })

   }
   changeType(x:any){
     console.log(this.x);
   }

  ngOnInit() {
  }
  async add() {
    let a:string;
    if(this.x=='c'){
      a='Communiqué';
    }else{
      a='Evénement';


    }
    
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Ajouter Actualités',
      subHeader: '',
      message: 'vous voulez Ajouter cet  ' +a,
      buttons: [
        {text:'Confirmer',handler: () => {

this.addNotes()  ;}
},
        {text:'Annuler'},

    ]
    });

    await alert.present();
  }
  addNotes(){
    /*console.log(this.fNote.value,this.fNote.get('desc').value);
this.service.addNote(this.f,this.fNote.get('desc').value,this.fNote.get('title').value,this.id).subscribe(res =>{

  console.log(res);
  window.location.href=`http://localhost:8100/consult-notes/${this.id}`;
  
})*/
console.log(this.fNote.get('levels').value)
console.log(this.x);

this.service.addNote(this.f,this.x,this.fNote.get('desc').value,this.fNote.get('title').value,this.fNote.get('levels').value).subscribe(res =>{


  console.log(res);

})
window.location.reload();


  }

  getFile(x:any){
    this.f=x.target.files[0];
    console.log(this.f);


  }

}
