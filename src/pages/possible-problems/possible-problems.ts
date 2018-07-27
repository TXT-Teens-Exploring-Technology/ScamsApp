import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ResultsPage } from '../results/results';




/**
 * Generated class for the PossibleProblemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Items {
  icon: any;
  title: any;
  preview: any;
  id: any;
  pic: any;
  cost: any;
  desc: any;
}
@IonicPage()
@Component({
  selector: 'page-possible-problems',
  templateUrl: 'possible-problems.html',
})
export class PossibleProblemsPage {

  searchQuery: string = '';
  items: Items[];

  constructor(public navCtrl:NavController) {
    this.initializeItems();
  }

  initializeItems() {
     this.items = [
      {
        icon: '<i class="fas fa-battery-three-quarters"></i>',
        title: 'Discharged Battery',
        preview: 'A discharged battery is when internal chemical reaction reduces the stored charge in a battery. ',
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is $238",
        desc: "The possible problems can lead to shortened battery life, Battery engine leak, and a reduced power of a battery.",
        id: "battery"
      },
      {
        icon: '<i class="fas fa-thermometer-three-quarters"></i>',
        title: 'Broken Thermostat',
        preview: 'A piece of a car between the engine and the radiator that reduces engine wear deposits and emissions.',
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is $204",
        desc: "The possible problems can lead to overheating, poor engine performance, and vibration when shifting gears.",
        id: "thermostat"
      },
      {
        icon: '<i class="fas fa-tint"></i>',
        title: 'Leaking Coolant System',
        preview: 'Green or orange liquid coming from a car may indicate a coolant leak',
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is $80",
        desc: "The possible problems can lead to overheating, excessive noise, and it will break your heater core.  ",
        id: "coolant"
      }
    ]
  }
  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.id.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  clickItem(id){
    this.navCtrl.push(ResultsPage, {id: id});
  }

}
