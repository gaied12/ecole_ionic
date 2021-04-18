import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NotesService } from 'src/app/notes-service/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  f:File;
  id:any;
  date:Date;
  type:any;
  title:any;
  desc:any
  image:any;

  note:any;
  constructor(private route:ActivatedRoute,private service:NotesService,private alert:AlertController) {
    this.id =+this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    
    
   }

  ngOnInit() {
    this.service.getNote(this.id).subscribe(res =>{

      this.note = res;
      console.log(this.note);

      this.f=res.file;
      this.f=this.note.file;
      this.desc=this.note.description;
      this.title=this.note.title;
      this.type=this.note.type;
      if(this.note.type==='Evénement'){
        this.image = 'data:image/jpeg;base64,' + this.note.imageUser.picByte;
        console.log(this.image);
      }
     
    } )

  }
  fileUpload(event){
    this.f=event.target.files[0];
    console.log(this.f);

  }
  fileVerif(x:any){
    if(x==null){
     return ;
    }else{
      return x;
    }
  }
  colorFile(x:any){
    if(x==null){
      return '#c62828'
     }else{
       return '#546E7A';
     }

  }
  imgVerif(x:any){
    if(x==null){
      return 'aucune'
    }else{
      return x ;
    }
  }
  async del(x:any) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Supprimer ',
      subHeader: '',
      message: 'vous voulez supprimer cette note d`information ',
      buttons: [
        {text:'Confirmer',handler: () => {

this.deleteNote(x)  ;}
},
        {text:'Annuler'},

    ]
    });

    await alert.present();
  }
  async upd() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Mofifier',
      subHeader: '',
      message: 'vous voulez Modifier cette note d`information ',
      buttons: [
        {text:'Confirmer',handler: () => {

this.updNote()  ;}
},
        {text:'Annuler',handler:()=>{}
      },

    ]
    });

    await alert.present();
  }
  updNote(){
 this.service.updNote(this.f,this.id,this.title,this.desc).subscribe(res=>{
  window.location.href=`http://localhost:8100/note/${this.id}`

   console.log(res);
 })


  }
  deleteNote(x:number){
    this.service.deleteNote(x).subscribe(res =>{
      window.location.href=`http://localhost:8100/consult-notes`
    })
  }

}
