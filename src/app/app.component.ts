import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';






@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent
 {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
   
    {
      title: 'Djibouti',
      url: '/Djibouti',
      icon: 'apps'
    },
    {
      title: 'Ali Sabieh',
      url: '/AliSabieh',
      icon: 'apps'
    },
    {
      title: 'Arta',
      url: '/Arta',
      icon: 'apps'
    },
    {
      title: 'Dikhil',
      url: '/Dikhil',
      icon: 'apps'
    },
    {
      title: 'Tadjourah',
      url: '/Tadjourah',
      icon: 'apps'
    },
    {
      title: 'Obock',
      url: '/Obock',
      icon: 'apps'
    },
  ];
}

// Platform.registerBackButtonAction(() => { 
//   {
//     const overlayView = this.app._appRoot._overlayPortal._views[0];
//     if(overlayView && overlayView.dismiss) {
//       overlayView.dismiss();
//     } else {
//       let nav = this.app.getActiveNav();
//       if(nav.canGoBack()){
//         nav.pop();
//       } else if(this.lastBack + 500 < Date.now()) {
//         this.platform.exitApp();
//       }
//     }
//     this.lastBack = Date.now();
//   }
// });

