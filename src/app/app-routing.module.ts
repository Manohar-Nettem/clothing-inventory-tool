import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';

/* creating the routes */
const routes: Routes = [
  {path:"" , redirectTo: "create",pathMatch:'full'},
  /* lazy loading the products. it doesn't make the huge difference as of now.
  because It is not a big project */
  {path:"products",loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
  },
  { path : 'create' ,component: ProductCreateComponent},
  { path : "search" , component: SearchComponent}
];

@NgModule({
  /* loading the routes making them lazy loading and preloading them in idle time of the application */
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
