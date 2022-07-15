import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSerialsListComponent } from './product-serials-list/product-serials-list.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {RouterModule,Routes } from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { ProductService } from './product.service';
import { NgxBarcodeModule } from '@greatcloak/ngx-barcode'



const router:Routes = [
  {path:"" , component:ProductListComponent},
  {path:"serials/:id" , component:ProductSerialsListComponent}
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductSerialsListComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxDatatableModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    NgxBarcodeModule
    
    
  ],
  providers:[ProductService]
})
export class ProductsModule { }
