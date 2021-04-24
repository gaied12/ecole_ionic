import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-add-fils',
  templateUrl: './add-fils.page.html',
  styleUrls: ['./add-fils.page.scss'],
})
export class AddFilsPage implements OnInit {

  constructor(private menu: MenuController) {
    this.menu.enable(true,'first')
    this.menu.enable(false,'second')
   }

  ngOnInit() {
  }

}
