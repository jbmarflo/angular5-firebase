/**
 * Created by joseph on 13/04/17.
 */
// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {LoginService} from '../application/service/login.service';
import {RoadmapService} from '../application/service/roadmap.service';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstraps';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'app-root',
    templateUrl: '../view/default/default.html',
    providers: [LoginService, RoadmapService],
    styleUrls: ['../assets/css/style.css']
})

// Clase del componente donde irán los datos y funcionalidades
export class DefaultComponent implements OnInit {
    public identity;
    public roapmapList;
    public loadingRoadmap;
    public pages = [];
    public closeResult: string;
    public footer = true;

    constructor(
        private _loginService: LoginService,
        private _roapService: RoadmapService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.loadingRoadmap = true;
    }

    getRoudmaps() {
        this._route.params.subscribe(params => {
            let page = +params['page'];
            if (page == null) {
                page = 1;
            }
            this._roapService.searchRoadMap(page).subscribe(
                response => {
                    this.roapmapList = response;
                    this.loadingRoadmap = false;
                    for(let i = 0; i < response.pagination.total; i++) {
                        this.pages.push(i);
                    }
                }
            );
        });
    }
    // verifyLink(content) {
    //     // this.modalService.open(content).result.then((result) => {
    //     //     this.closeResult = `Closed with: ${result}`;
    //     // }, (reason) => {
    //     //     // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     // });
    // }

    ngOnInit(): void {
        this.identity   = this._loginService.getIdentity();
        this.getRoudmaps();
    }
}