import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RoadmapService{

    public url = 'https://api.myjson.com/bins';

    constructor(private _http: HttpClient) {}

    searchRoadMap(page) {
        // "email="+JSON.stringify(user);

        // application/json   -   application/x-www-form-urlencoded
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http
            .get(
                this.url + '/uinjb', {headers: headers}
                )
            .map(res => res.json());
    }

    getRoutmapById() {

    }
}