import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-prof',
  templateUrl: './home-prof.page.html',
  styleUrls: ['./home-prof.page.scss'],
})
export class HomeProfPage implements OnInit {

  constructor(private menu: MenuController) {
    this.menu.enable(true, 'prof');
   }

  ngOnInit() {
  }

}
