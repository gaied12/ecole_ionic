import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes-service/notes.service';

@Component({
  selector: 'app-info-stud',
  templateUrl: './info-stud.page.html',
  styleUrls: ['./info-stud.page.scss'],
})
export class InfoStudPage implements OnInit {
  listNotes:any[]=[];

  constructor(private service:NotesService,private rou:ActivatedRoute) { }

  ngOnInit() {
    var id = this.rou.snapshot.paramMap.get('id');
    this.service.allCom(+id).subscribe(result =>{

      this.listNotes=result;
    })
  }

}
