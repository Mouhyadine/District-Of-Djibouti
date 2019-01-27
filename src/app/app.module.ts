import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DjiboutiComponent } from './djibouti/djibouti.component';
import { ArtaComponent } from './arta/arta.component';
import { AliSabiehComponent } from './ali-sabieh/ali-sabieh.component';
import { TadjourahComponent } from './tadjourah/tadjourah.component';
import { ObockComponent } from './obock/obock.component';
import { DikhilComponent } from './dikhil/dikhil.component';

@NgModule({
  declarations: [AppComponent, DjiboutiComponent, ArtaComponent, AliSabiehComponent, TadjourahComponent, ObockComponent, DikhilComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
