import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CancelInvoiceComponent } from './cancel-invoice/cancel-invoice.component';

import {HttpClientModule} from "@angular/common/http";
import {Router, RouterModule, Routes} from '@angular/router';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ReactiveFormsModule} from "@angular/forms";

const router :Routes= [
  {path:"", component:ListInvoicesComponent},
  {path:"create", component:CreateInvoiceComponent},
  {path:"cancel",component:CancelInvoiceComponent}
]

@NgModule({
  declarations: [
    ListInvoicesComponent,
    CreateInvoiceComponent,
    CancelInvoiceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule.forChild(router)


  ]
})
export class InvoicesModule { }
