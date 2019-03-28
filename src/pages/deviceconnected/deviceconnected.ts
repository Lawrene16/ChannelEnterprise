import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeviceconnectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deviceconnected',
  templateUrl: 'deviceconnected.html',
})
export class DeviceconnectedPage {
  connectiontype;
  optionsList;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initSettingsList();
    this.connectiontype = "ble";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceconnectedPage');
  }

  initSettingsList(){
    this.optionsList = [
      {title:"Alert & LED Preference", icon: "../../assets/LOGO/3.png", index: 0},
      {title:"Sound Preference", icon: "../../assets/LOGO/bass.png", index: 1},
      {title:"Never Forget Alert", icon: "../../assets/LOGO/11.png", index: 2},
      {title:"Voice Command", icon: "../../assets/LOGO/audio.png", index: 3},
      {title:"Voice Prompt", icon: "../../assets/LOGO/audio.png", index: 4},
      {title:"Find the Headset", icon: "../../assets/LOGO/8.png", index: 5},
      {title:"Find the phone", icon: "../../assets/LOGO/8.png", index: 6},
      {title:"Battery Capacity", icon: "../../assets/LOGO/6.png", index: 7},
      
    ]
  }

  openOptions(option){
    this.gotoNextPage(option.title);
  }

  gotoNextPage(title){
    console.log(title);
  }
}
