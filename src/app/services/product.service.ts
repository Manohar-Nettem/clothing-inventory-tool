/* Product Service importing the required modules */
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from "./../../environments/environment";
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  /* method to get products */
  getProducts(){
    return this.http.get<Product[]>(environment.node_url+'/api/get/products');
  }
  /* method to search products */
  searhcProducts(text: string){
    return this.http.get<Product[]>(environment.node_url+`/api/search/${text}`);
  }
  /* method to save products */
  saveProduct(product: Product){
    return this.http.post<Product[]>(environment.node_url+"/api/save/product", {productDto: product});
  }
}
