import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { resolveDefinition } from '@angular/core/src/view/util';
import { PairingPage } from '../pairing/pairing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pairedList: pairedlist;
  listToggle: boolean = false;
  pairedDeviceID: number = 0;
  dataSend: string = "";
  address;
  name;
  testList = [];
  // testList = [{},{},{}];  
  devicetype;
  isSearchedEmpty = false;

  isforsearched = false;
  isforpaired = true;


  searchedList = [{}, {}, {}];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public bluetoothSerial: BluetoothSerial
  ) {


    this.devicetype = "paired";

    // if(this.devicetype == "searched"){
    //   console.log(this.devicetype);
    //   this.isSearchedEmpty = true;
    //   this.isforsearched = true;
    //   this.isforpaired = false;
    // }else if(this.devicetype == "searched"){
    //   console.log(this.devicetype);      
    //   this.isSearchedEmpty = false;
    //   this.isforpaired = true;
    //   this.isforsearched = false;
      
    // }

    this.checkIfListIsEmpty();
    this.checkBluetoothEnabled();
  }

  checkIfListIsEmpty(){
    // console.log("wsdfkjhskdfhksdfhksdfhksdfhksdfh");
    
    // if(this.pairedList == undefined){
    //   this.isSearchedEmpty = true;
    // }else{
    //   this.isSearchedEmpty = false;
    // }
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

  
  goToNext(){
    // if(this.isSearchedEmpty){
    //   this.showToast("No devices selected");
    // }
    // else{
    this.navCtrl.push(PairingPage, {"address": this.address, "name": this.name});              
    // }
    this.showToast("Trying to connect to " + this.name);
  }


  selectDevice(index){

    this.pairedDeviceID = index;
    
    let connectedDevice = this.pairedList[this.pairedDeviceID];
    if(!connectedDevice.address){
      this.showError("Select paired device to connect");
      return;
    }

    // this.address = connectedDevice.address;
    // this.name = connectedDevice.name;


    this.address = this.testList[this.pairedDeviceID].address;
    this.name = this.testList[this.pairedDeviceID].name;
    

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
