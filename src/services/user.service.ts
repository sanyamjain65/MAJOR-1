// Imports
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { ApiResponse } from '../models/ApiResponse';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Import basic endpoint to extend from 
import {Endpoint} from './endpoint.service';
declare var localStorage: any;

@Injectable()
export class UserService extends Endpoint{

    // Resolve HTTP using the constructor
    constructor (public http: Http) {
        super(http);
    }

    // Schedule a new call 
    login(data:any) : Observable<ApiResponse<any>> {
        //Make a post request to check login status of given credentials
        return this.http.post(this.baseURL+"user/login" ,data)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    register(data:any) : Observable<ApiResponse<any>> {
        //Make a post request to check login status of given credentials
        return this.http.post(this.baseURL+"user/register" ,data)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    
    

}
