import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  public items = [
    {
      icon: '<i class="fas fa-battery-three-quarters"></i>',
      title: 'Discharged Battery',
      preview: 'A discharged battery is when internal chemical reaction reduces the stord charge in a battery. ',
      pic: "assets/battery.jpg",
      cost: "The average cost is $238",
      desc: "The possible problems can lead to shortened battery life, battery engine leak, and a reduced power of battery.",
      id: "battery"
    },
    {
      icon: '<i class="fas fa-thermometer-three-quarters"></i>',
      title: 'Broken Thermostat',
      preview: 'A piece of a car between the engine and the radiator and it reduces engine war deposits and emissions',
      pic: "assets/thermostat.jpg",
      cost: "The average cost is $204",
      desc: "The possible problems can lead to overheating, poor engine performance, and vibration when shifting gears.",
      id: "thermostat"
    },
    {
      icon: '<i class="fas fa-tint"></i>',
      title: 'Leaking Coolant System',
      preview: 'Green or orange liquid coming from a car may indicate a coolant leak',
      pic: "assets/coolant.jpg",
      cost: "The average cost is $80",
      desc: "The possible problems can lead to overheating, excessive noise, and it will break your heater core.  ",
      id: "coolant"
    }
  ]

  public currentItem;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const id = this.navParams.get('id');

    if (id && id.trim() != '') {
      this.currentItem = this.items.filter((item) => {
        if(item.id === id){
          return item
        }
      })
      this.currentItem = this.currentItem[0];
    }


  }


}
