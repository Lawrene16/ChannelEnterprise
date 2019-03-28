import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SoundprefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soundpref',
  templateUrl: 'soundpref.html',
})
export class SoundprefPage {
  // thecolor = "color($colors, primary);";
  buttondef = "#464646";
  colorOne = "#fff";
  colorTwo = "#fff";
  colorThree = "#fff";
  colorFour = "#fff";
  colorFive = "#fff";
  colorSix = "#fff";
  colorSeven = "#fff";
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoundprefPage');
  }

  swapRow(index){
    // console.log(index);
    this.buttondef = "#f4981e";

    switch(index){
      case 1:
        this.colorOne = "#f4981e";
        this.colorTwo = "#fff";this.colorThree = "#fff";
        this.colorFour = "#fff"; this.colorFive = "#fff";
        this.colorSix = "#fff"; this.colorSeven = "#fff";
        break;

      case 2:
        this.colorTwo = "#f4981e";
        this.colorOne = "#fff";this.colorThree = "#fff";
        this.colorFour = "#fff"; this.colorFive = "#fff";
        this.colorSix = "#fff"; this.colorSeven = "#fff";
        break;

      case 3:
        this.colorThree = "#f4981e";
        this.colorTwo = "#fff";this.colorOne = "#fff";
        this.colorFour = "#fff"; this.colorFive = "#fff";
        this.colorSix = "#fff"; this.colorSeven = "#fff";
        break;

      case 4:
        this.colorFour = "#f4981e";
        this.colorOne = "#fff";this.colorThree = "#fff";
        this.colorTwo = "#fff"; this.colorFive = "#fff";
        this.colorSix = "#fff"; this.colorSeven = "#fff";
        break;
        
        case 5:
        this.colorFive = "#f4981e";
        this.colorTwo = "#fff";this.colorThree = "#fff";
        this.colorFour = "#fff"; this.colorOne = "#fff";
        this.colorSix = "#fff"; this.colorSeven = "#fff";
        break;

      case 6:
        this.colorSix = "#f4981e";
        this.colorOne = "#fff";this.colorThree = "#fff";
        this.colorFour = "#fff"; this.colorFive = "#fff";
        this.colorTwo = "#fff"; this.colorSeven = "#fff";
        break;

      case 7:
        this.colorSeven = "#f4981e";
        this.colorTwo = "#fff";this.colorThree = "#fff";
        this.colorFour = "#fff"; this.colorFive = "#fff";
        this.colorSix = "#fff"; this.colorOne = "#fff";
        break;
    }

  }
}
