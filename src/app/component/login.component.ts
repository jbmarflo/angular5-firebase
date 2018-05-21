
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {LoginService} from '../application/service/login.service';
import {User} from '../domain/user/entity/user';
import {NgForm} from '@angular/forms';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-root',
    templateUrl: '../view/user/login.html',
    providers: [LoginService],
    styleUrls: ['../assets/css/style.css'],
})

export class LoginComponent implements OnInit {
    public title = 'Entra y continúa aprendiendo';
    public User = new User();
    public button = 'Entrar';
    public loading = false;
    public errorMessage;
    public token;
    public identity;
    public error = false;

    constructor(private _loginService: LoginService, private _router: Router) {}

    ngOnInit(): void {
        if (this._loginService.getIdentity() != null && this._loginService.getIdentity().sub) {
            this._router.navigate(['/index']);
        }
        console.log(this._loginService.getToken());
    }

    onSubmit() {
        // subscribe recoje la respuesta del servicio
        this.User.get_hash = false;
        this.loading = true;
        this.button = 'loading...';
        this.login(this.User);

    }

    login(User) {
        this._loginService.signup(User).subscribe(
            response => {

                this.identity = response[0];

                if (this.identity.status) {
                    this.error = false;
                    localStorage.setItem('identity', JSON.stringify(this.identity['data']));
                    console.log(this.identity['data']);
                    User.get_hash = true;
                    // Get token if identity exist
                    this._loginService.signup(User).subscribe(
                        response => {
                            this.token = response[0];

                            localStorage.setItem('token', JSON.stringify(this.token.token));
                            console.log(this.token);
                            window.location.href = '/';
                        },
                        error => {
                            this.errorMessage = <any>error;

                            if (this.errorMessage != null) {
                                // console.log(this.errorMessage);
                                console.log('error en la petición');
                            }
                        }
                    );
                } else {

                    this.error = true;
                }
                console.log(this.error);
                this.button = 'Entrar';
                this.loading = false;
            },
            error => {
                this.errorMessage = <any>error;

                if (this.errorMessage != null) {
                    // console.log(this.errorMessage);
                    console.log('error en la petición');
                }
            }
        );
    }
}
