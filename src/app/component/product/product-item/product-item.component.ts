import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../application/service/product.service';
import { NgForm } from '@angular/forms';
import {Product} from '../../../domain/product/entity/product';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProducts();
        this.resetForm();
    }

    onSubmit(productForm: NgForm) {
        this.productService.insertProduct(productForm.value);
        this.resetForm(productForm);
    }

    resetForm(productForm?: NgForm) {
      if (productForm != null) {
        productForm.reset();
        this.productService.selectedProduct = new Product();
      }
    }
}
