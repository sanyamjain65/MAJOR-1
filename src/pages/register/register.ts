import { UserService } from '../../services/user.service';
import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';

 

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { name: '',email: '', password: '',phone_number:'',address:'',pincode:'',gender:'' };

 
  constructor(private nav: NavController, private user: UserService, private alertCtrl: AlertController) { }
 
  register() {
    this.user.register(this.registerCredentials).subscribe(success => {
      if (success.result) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
  genderMale(){
    this.registerCredentials.gender = "Male";
  }
  genderFemale(){
    this.registerCredentials.gender = "Female";
  }

 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}