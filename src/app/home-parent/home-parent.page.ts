import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.page.html',
  styleUrls: ['./home-parent.page.scss'],
})
export class HomeParentPage implements OnInit {

  constructor(private menu: MenuController,private auth: AuthService) {
    this.menu.enable(true,'first')

   }
   open(){
     this.menu.open('first');
   }

  ngOnInit() {
    console.log(localStorage.getItem('device'));
    if(localStorage.getItem('device')===null){
      console.log('this device has a key')
      return;
    }else{
      let user=JSON.parse(localStorage.getItem('user'));

      let idDvice =localStorage.getItem('device');
 console.log( user.id + ' device===>'  ,idDvice)
 this.auth.addDevice( user.id ,idDvice).subscribe(result => {

  console.log(result);
 })


    }



  }

}
