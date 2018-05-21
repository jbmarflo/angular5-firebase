import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './component/default.component';
import { LoginComponent } from './component/login.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: DefaultComponent},
    {path: 'login', component: LoginComponent},
    {path: 'firebase', component: ProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [DefaultComponent, LoginComponent, ProductComponent];
