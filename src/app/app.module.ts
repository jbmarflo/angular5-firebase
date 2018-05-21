import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';

// Component Product
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductItemComponent } from './component/product/product-item/product-item.component';
// Component Service
import { ProductService } from './application/service/product.service';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        ProductListComponent,
        ProductItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
    ],
    providers: [
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
