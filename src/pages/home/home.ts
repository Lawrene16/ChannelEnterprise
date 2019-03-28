import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { resolveDefinition } from '@angular/core/src/view/util';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pairedList: pairedlist;
  listToggle: boolean = false;
  pairedDeviceID: number = 0;
  dataSend: string = "";
  // testList = [];
  testList = [{},{},{}];  
  devicetype;
  isSearchedEmpty = true;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public bluetoothSerial: BluetoothSerial
  ) {

    this.devicetype = "searched";
    this.checkIfListIsEmpty();
      // this.checkBluetoothEnabled();
  }

  checkIfListIsEmpty(){
    if(this.testList.length < 1){
      this.isSearchedEmpty = true;
    }else{
      this.isSearchedEmpty = false;
    }
  }


  checkBluetoothEnabled(){
    this.bluetoothSerial.isEnabled().then(() =>{
      this.listPairedDevices();
    }).catch((err) =>{
      this.showError("Please enable bluetooth");
    });
  }

  segmentChanged(){

  }

  listPairedDevices(){
    this.bluetoothSerial.list().then((res)=>{
      this.pairedList = res;
      this.listToggle = true;
    }).catch((err) =>{
      this.showError("Please enable bluetooth");
    });
  }

  selectDevice(){
    let connectedDevice = this.pairedList[this.pairedDeviceID];
    if(!connectedDevice.address){
      this.showError("Select paired device to connect");
      return;
    }

    let address = connectedDevice.address;
    let name = connectedDevice.name;

    this.connect(address);
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

  deviceDisconnected(){
    this.bluetoothSerial.disconnect();
    this.showToast("device disconnected");
  }

  handledata(data){
    this.showToast(data);
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

interface pairedlist{
    "class": number,
    "id": string,
    "address": string,
    "name": string
}
