import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NotesService } from '../notes-service/notes.service';

@Component({
  selector: 'app-parent-note',
  templateUrl: './parent-note.page.html',
  styleUrls: ['./parent-note.page.scss'],
})
export class ParentNotePage implements OnInit {
  note:any;

  constructor(private noteService: NotesService,private menu: MenuController,private rou:ActivatedRoute) {
    this.menu.enable(false,'second');
    this.menu.enable(true,'first');

   }
  ngOnInit() {
    var id=this.rou.snapshot.paramMap.get('id');
    this.noteService.getNote(+id).subscribe(result => {

      this.note = result;
    })
  }
  getImg(x:any){

    return "data:image/jpeg;base64,"+x;
  }
  down(x:any){
    window.location.href=x;

  }

}
