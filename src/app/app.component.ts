import {Component, OnInit} from '@angular/core';
import {LoginService} from './application/service/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./assets/css/style.css'],
    providers: [LoginService]
})
export class AppComponent implements OnInit{
    public identity;
    public token;

    constructor(
        private _loginService: LoginService
    ) {

    }

    ngOnInit(): void {
        this.identity   = this._loginService.getIdentity();
        this.token      = this._loginService.getToken();
    }
}
