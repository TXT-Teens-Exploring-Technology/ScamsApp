import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PossibleProblemsPage } from '../possible-problems/possible-problems';
import { ResultsPage } from '../results/results';
import { leave } from '@angular/core/src/profile/wtf_impl';
 


@Component({
  templateUrl: 'home.html',
  selector: 'page-home',
})
export class HomePage {
  public first = true;
  public carBrand = 'honda';
  public productionYear = 'b';
  public carModel = 'Civic'; 
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navController: NavController) {
  }

  models = ["Tacoma", "Corolla", "Prius", "Altima", "Sentra", "Murano","Civic","Accord","CR-V",
            "C-Class", "G-Class", "E-Class", "Sonata", "Tucson", "Elantra"];
  carModels = ["model1", "model2", "model3"];
  movePage(){
    this.navCtrl.push(PossibleProblemsPage);
    console.log("page moved")
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Car Vin Number',
      subTitle: 'A vin is blah blah ',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  onChange(e){
    this.first = false;
      console.log(e);
      if(e == "toyota"){
        this.carModels[0] = this.models[0];
        this.carModels[1] = this.models[1];
        this.carModels[2] = this.models[2];
      } else if(e == "nissan"){
        this.carModels[0] = this.models[3];
        this.carModels[1] = this.models[4];
        this.carModels[2] = this.models[5];
      } else if(e == "honda"){
        this.carModels[0] = this.models[6];
        this.carModels[1] = this.models[7];
        this.carModels[2] = this.models[8];
      } else if(e == "mercedes"){
        this.carModels[0] = this.models[9];
        this.carModels[1] = this.models[10];
        this.carModels[2] = this.models[11];      
      } else if(e == "hyundai") {
        this.carModels[0] = this.models[12];
        this.carModels[1] = this.models[13];
        this.carModels[2] = this.models[14];
      }
  }

  prob: PossibleProblemsPage;

  

}
