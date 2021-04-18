import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service-student/student.service';

@Component({
  selector: 'app-all-abs',
  templateUrl: './all-abs.page.html',
  styleUrls: ['./all-abs.page.scss'],
})
export class AllAbsPage implements OnInit {
id:string;
dateAbs:string;
absence:any[]=[];
filterAbs:any[]=[];
  constructor(private route:ActivatedRoute,private service:StudentService,private datePipe:DatePipe) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getAbsByStud(this.id).subscribe(result =>{
      this.absence=result;
      this.filterAbs=this.absence;
      console.log(this.filterAbs);

    })
   

    
  }
  ToDate(x:any) {
    var date = new Date()
    date.setHours(+x.substr(0,2))
    date.setMinutes(+x.substr(3,2))
    return date;

  }
  date(x:any){
    var date = new Date(x);
    return date;


  }
  filterByDate(){
   var date = this.datePipe.transform(this.dateAbs, 'yyyy-MM-dd');
  
  this.filterAbs = this.absence.filter( x => x.date === date);
  console.log(this.filterAbs)
}


}
