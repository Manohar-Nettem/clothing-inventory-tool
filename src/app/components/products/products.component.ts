import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private Product: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.Product.getProducts().subscribe(
      (products) => {
        console.log("products:::");
        console.log(products);
        this.products = products;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  createProduct(){
    this.router.navigate(['/create'])
  }

}
