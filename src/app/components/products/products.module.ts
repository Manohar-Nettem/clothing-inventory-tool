/* 
    seggregated product related info into products.module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

/* creatign the routes */
const routes : Routes = [
    { path : '', component: ProductsComponent}
]

@NgModule({
    declarations : [
        ProductsComponent,
    ],
    imports:[ 
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule
    ],
    exports:[
        ProductsComponent,
        RouterModule,
        HttpClientModule,
    ]
})
export class ProductsModule {

}