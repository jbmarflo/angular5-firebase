import { Component, OnInit } from '@angular/core';
import {Product} from '../../../domain/product/entity/product';
import {ProductService} from '../../../application/service/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public productList: Product[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        return this.productService.getProducts()
            .snapshotChanges().subscribe(item => {
            this.productList = [];
            item.forEach(element => {
                let x = element.payload.toJSON();
                x['key'] = element.key;
                this.productList.push(x as Product);
            });
        });
    }

}
