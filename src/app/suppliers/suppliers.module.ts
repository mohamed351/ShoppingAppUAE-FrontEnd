import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SuppliersCreateComponent } from './suppliers-create/suppliers-create.component';
import { SuppliersEditComponent } from './suppliers-edit/suppliers-edit.component';
import { SuppliersDeleteComponent } from './suppliers-delete/suppliers-delete.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SupplierService } from './supplier.service';

const routers:Routes =[
  {path:"", component:SuppliersListComponent},
  {path:"create", component:SuppliersCreateComponent },
  {path:"edit/:id", component:SuppliersEditComponent},
  {path:"delete/:id",component:SuppliersDeleteComponent}
]


@NgModule({
  declarations: [
    SuppliersListComponent,
    SuppliersCreateComponent,
    SuppliersEditComponent,
    SuppliersDeleteComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule.forChild(routers),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[SupplierService]
})
export class SuppliersModule { }
