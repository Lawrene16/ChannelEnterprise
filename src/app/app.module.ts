import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PairingPage } from '../pages/pairing/pairing';
import { DeviceconnectedPage } from '../pages/deviceconnected/deviceconnected';
import { AlertledPage } from '../pages/alertled/alertled';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertledPage,
    PairingPage,
    DeviceconnectedPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertledPage,
    PairingPage,
    DeviceconnectedPage
  ],
  providers: [
    StatusBar,
    BluetoothSerial,        
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
