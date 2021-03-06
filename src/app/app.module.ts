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
import { SoundprefPage } from '../pages/soundpref/soundpref';
import { NeverforgetalertPage } from '../pages/neverforgetalert/neverforgetalert';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertledPage,
    SoundprefPage,
    NeverforgetalertPage,
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
    SoundprefPage,
    HomePage,
    AlertledPage,
    NeverforgetalertPage,
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
