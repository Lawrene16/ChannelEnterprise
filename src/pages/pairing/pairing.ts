import { Component } from '@angular/core';
import { IonicPage, AlertController, ToastController, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { DeviceconnectedPage } from '../deviceconnected/deviceconnected';

/**
 * Generated class for the PairingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pairing',
  templateUrl: 'pairing.html',
})

export class PairingPage {

  name;
  address;
  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController,    
    public bluetoothSerial: BluetoothSerial,
    public alertCtrl: AlertController,    
    public navParams: NavParams) {


    this.name = this.navParams.get('name');
    this.address = this.navParams.get('address');


    // console.log(this.name);

    this.connect(this.address);    
    

  }

  ionViewDidLoad(){
    // this.connect(this.address);    
  }

  connect(address){
    // attempt to connect device with specidied address
    this.bluetoothSerial.connect(address).subscribe(success =>{
      this.deviceConnected();
      this.showToast("Successfully connected");
    }, error =>{
      this.showError("Error connecting to device");
    });
  }


  deviceConnected(){
    this.bluetoothSerial.subscribe('\n').subscribe(success =>{
      this.handledata(success);
      this.showToast("Connected Succesfully");
    }, error =>{
        this.showError(error);
    });
  }


  handledata(data){
    this.showToast(data);
    this.navCtrl.push(DeviceconnectedPage);
  }

  showError(error){
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: error,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  showToast(msg){
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
}
