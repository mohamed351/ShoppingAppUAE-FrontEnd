import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { CustomerService } from './customer.service';
import {ReactiveFormsModule} from '@angular/forms'


const routers:Routes =[
  {path:"", component:CustomerListComponent},
  {path:"create", component:CustomerCreateComponent },
  {path:"edit/:id", component:CustomerEditComponent},
  {path:"delete/:id",component:CustomerDeleteComponent}
]

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDeleteComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule.forChild(routers),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[CustomerService]
})
export class CustomersModule { }
