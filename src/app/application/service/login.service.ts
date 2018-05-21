/**
 * Created by joseph on 14/04/17.
 */
import {Injectable} from '@angular/core';
// import {Http, Response, Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

    public url = 'http://local.api.deepmy.com:8001/v1';
    public identity;
    public token;

    constructor(private _http: HttpClient) {}

    signup(user) {
        // "email="+JSON.stringify(user);
        let params = user;

        // application/json   -   application/x-www-form-urlencoded
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http
            .post(
                this.url+'/login', params, {headers: headers})
            .map(res => res.json());
    }

    getIdentity() {
        let identity = localStorage.getItem('identity');

        if (identity != "undefined") {
            this.identity = JSON.parse(identity);
        } else {
            this.identity = null;
        }

        return this.identity;
    }

    getToken() {
        let token = localStorage.getItem('token');

        if (token != "undefined") {
            this.token = JSON.parse(token);
        } else {
            this.token = null;
        }

        return this.token;
    }

    register(user) {
        // "email="+JSON.stringify(user);
        let params = user;

        // application/json   -   application/x-www-form-urlencoded
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http
            .post(
                this.url+'/user/register', params, {headers: headers})
            .map(res => res.json());
    }
}