import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NotesService } from 'src/app/notes-service/notes.service';

@Component({
  selector: 'app-consult-notes',
  templateUrl: './consult-notes.page.html',
  styleUrls: ['./consult-notes.page.scss'],
})
export class ConsultNotesPage implements OnInit {
  listNotes:any[]=[];
  filterNotes:any[]=[];
  id:number;
  x:any;

  constructor(private router:ActivatedRoute,private service:NotesService,private datepipe:DatePipe,private menu:MenuController) {
    this.menu.enable(false,'prof');
    this.menu.enable(true,'second');
    this.menu.enable(false,'first');



    this.id=+this.router.snapshot.paramMap.get('id');

   }
   filterComu(){
    console.log(this.filterNotes);


     this.filterNotes=this. listNotes.filter(x=>x.type ==='Communiqué');
     console.log(this.filterNotes);


   }
   fiterEvent(){
    this.filterNotes=this.listNotes.filter(x=>x.type ==='Evénement');


   }

  ngOnInit() {
    console.log(typeof (this.filterNotes))

    this.service.getNotes().subscribe(res => {

      this.listNotes=res;
      this.filterNotes=this.listNotes;

    })


  }
  search(){

    let dat=this.datepipe.transform(this.x,'yyyy-MM-dd');
    console.log(dat)

    this.service.getNoteByDate(dat).subscribe(res=>{
      this.listNotes=res;
      this.filterNotes=this.listNotes;


    })

  }
  card(x:any){
    if(x=='Communiqué'){
    return '8px solid red'
  } if(x=='Evénement'){
    return '8px solid #7f8c8d' ;

  }

}
i(x:any){
  if(x=='Communiqué'){
    return 'red'
  } if(x=='Evénement'){
    return '#7f8c8d' ;

  }

}
}
