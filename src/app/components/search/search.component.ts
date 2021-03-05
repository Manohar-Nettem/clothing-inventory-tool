import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: Product[] = [];
  searchText: string;
  constructor(private Product: ProductService,private route: ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(query=>{
      this.searchText = query.searchText;
      this.searchProduct();
    })
  }

  searchProduct(){
    this.Product.searhcProducts(this.searchText).subscribe(
      data =>{
        console.log(data);
        this.products = data;
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  createProduct(){
    this.router.navigate(['/create'])
  }

}
