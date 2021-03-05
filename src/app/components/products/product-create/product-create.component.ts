import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private router : Router, private Product: ProductService) { }

  ngOnInit(): void {
  }
  create(form: NgForm){
    console.log(form);
    if(!form.value || form.invalid){
      return;
    }
    this.Product.saveProduct(form.value).subscribe(
      data => {
        if(data){
          console.log(data);
          this.router.navigate(['/products'])
        }
      }, 
      err => {
        console.log(err);
      }
    );
  }

}
