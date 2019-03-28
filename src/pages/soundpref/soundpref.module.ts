import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoundprefPage } from './soundpref';

@NgModule({
  declarations: [
    SoundprefPage,
  ],
  imports: [
    IonicPageModule.forChild(SoundprefPage),
  ],
})
export class SoundprefPageModule {}
