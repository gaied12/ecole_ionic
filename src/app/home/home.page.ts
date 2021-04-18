import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
form:string ;
  constructor(private menu:MenuController) {
    this.menu.enable(false,'first');
    this.menu.enable(true,'second');

   }

  ngOnInit() {
    console.log(localStorage.getItem('user'))
  }
  open() {
    this.menu.open('second');
  }
    segmentChanged(ev: any) {
      this.form=ev.detail.value ;
    console.log(this.form);
  }


}
