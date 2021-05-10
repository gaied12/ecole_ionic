import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Component } from '@angular/core';


import { Platform, MenuController } from '@ionic/angular';
import { AuthService } from './auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  Name:string;
  user:any;
  idUser:any;
  logged:boolean=false;

  private sideMenuList: Array<object>;

  constructor(
    private platform: Platform,
    private menu: MenuController,
    private oneSignal:OneSignal,
    private service:AuthService,
    private router:Router
  ) {
    this.initializeApp();
    if(localStorage.getItem('user')!==null){
      this.logged=true;
    }
    console.log(this.logged);



  }
  ngOnInit(): void {
    this.oneSignal.getIds().then(identity => {

      console.log("Device Id==>"+identity.userId);
      localStorage.setItem('device',identity.userId );



    });

    if(localStorage.getItem('user')!==null){



    var user=  JSON.parse(localStorage.getItem('user'));
    this.service.getUser(user.id).subscribe(user => {
      this.user = user;
      this.idUser = user.id;


    })
  }


  }

  initializeApp() {

    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        console.log('hello world')

        this.push();
      }




    });


  }

  ionDidOpen(event) {
    // console.log(event);
    this.menu.isOpen().then(() => {
      console.log("opened")
    })
  }

  ionDidClose(event) {
    this.menu.isOpen().then(() => {
      console.log("Closed")
    })
  }
  push(){
    this.oneSignal.startInit('d24d3a6e-d303-458b-a220-b3dd3f09d685', '925449576541');

  this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);


  this.oneSignal.handleNotificationReceived().subscribe(data => {
    data.payload.smallIcon = 'drawable-hdpi-icon.png'
  });



  this.oneSignal.handleNotificationOpened().subscribe(() => {
    console.log("helloworld");

  });


  this.oneSignal.endInit();



    }




}
