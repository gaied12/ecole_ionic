import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NotesService } from '../notes-service/notes.service';

@Component({
  selector: 'app-note-parent',
  templateUrl: './note-parent.page.html',
  styleUrls: ['./note-parent.page.scss'],
})
export class NoteParentPage implements OnInit {
  listNotes:any[]=[];

  constructor(private noteService: NotesService,private menu: MenuController) {
    this.menu.enable(false,'second');
   let user= JSON.parse(localStorage.getItem('user'))
   if(user.role==='PARENT'){
    this.menu.enable(true,'first');

    this.menu.enable(false,'prof');




   }
   if(user.role=='TEACHER'){
    this.menu.enable(true,'prof');

    this.menu.enable(false,'first');



   }

   }

  ngOnInit() {
    this.noteService.allEvent().subscribe(result => {
      this.listNotes = result;
      console.log(this.listNotes);
    })
  }
  getImg(x:any){

    return "data:image/jpeg;base64,"+x;
  }
}
