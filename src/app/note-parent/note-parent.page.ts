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
    this.menu.enable(true,'first');

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
