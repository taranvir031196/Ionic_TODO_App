import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {IonicStorageModule} from "@ionic/storage";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
 import { StatusBar} from "@ionic-native/status-bar/ngx";



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  entryComponents: [
    
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot({  
    name: '__mydb',
     driverOrder: ['indexeddb', 'sqlite', 'websql']
   })],
  providers: [
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
