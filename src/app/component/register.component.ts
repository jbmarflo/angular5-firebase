import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {LoginService} from '../application/service/login.service';
import {User} from '../domain/user/entity/user';
import {LoginComponent} from './login.component';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-root',
    templateUrl: '../view/user/register.html',
    providers: [LoginService, LoginComponent],
    styleUrls: ['../assets/css/style.css']
})

// Clase del componente donde irán los datos y funcionalidades
export class RegisterComponent implements OnInit {
    public title = 'Regístrate';
    public subtitle = 'comparte y sigue aprendiendo';
    public user: User = new User();
    public errorMessage;
    public button = 'Registrar';
    public status;
    public loading = false;

    constructor(
        private _loginService: LoginService,
        private _loginComponent: LoginComponent,
        private _route: ActivatedRoute,
        private _router: Router
    ){ }

    ngOnInit() {
        this.user.id = null;
        this.user.role = 'user';
        let identity = this._loginService.getIdentity();
        if (identity != null && identity.sub) {
            this._router.navigate(["/index"]);
        }
    }

    onSubmit() {
        this.button = 'Loading...';
        this.loading = true;

        this._loginService.register(this.user).subscribe(
            response => {
                console.log(response);
                this.status = response.status;
                if (response.status) {
                    // Init sesión
                    this._loginComponent.login(this.user);
                    // window.location.href ="/";

                } else {
                    let message = response.message;
                    let keyObject = Object.keys(message)[0];
                    let valueObject = message[keyObject];
                    let subKeyObject = Object.keys(valueObject)[0];
                    let subValueObject = valueObject[subKeyObject];

                    this.errorMessage = keyObject + ': ' + subValueObject;
                    console.log(this.errorMessage);

                    this.button = 'Registrar';
                    this.loading = false;
                }
            },
            error => {
                this.errorMessage = <any>error;

                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert('Error en la petición');
                }
            }
        );

    }

}

