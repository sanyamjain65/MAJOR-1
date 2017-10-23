// Imports
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class Endpoint{

	
     // private instance variable to hold base url
     //public baseURL = 'http://192.168.1.3:1337/';
      public baseURL = 'https://madad.herokuapp.com/';

     // Resolve HTTP using the constructor
     constructor (public http: Http) {}
}