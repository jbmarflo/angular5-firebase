/**
 * Created by joseph on 13/04/17.
 */
// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'logout',
    directives: [ROUTER_DIRECTIVES],
    template: "Saliendo..."
})

// Clase del componente donde irán los datos y funcionalidades
export class LogoutComponent implements OnInit{
    public title: string = 'Entra y continúa aprendiendo';
    public user;
    public errorMessage;
    public token;
    public identity;

    constructor(
        private _router: Router
    )
    {}

    ngOnInit(){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        this.identity = null;
        this.token = null;

        window.location.href = "/login";
        // this._router.navigate(["/index"]);
    }


}
