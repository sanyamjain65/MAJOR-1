import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

 
  gender:string;
    javascript = false;
    angular = false;
    csharp = false;
    name = 'Two way bound';
	
  
  
}
