import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [
  { path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    children:[
      {
        path: 'dashboard',
        loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path:"customers",
        loadChildren :() => import("./customers/customers.module").then(m=> m.CustomersModule)
      },
      {
        path:"suppliers",
        loadChildren :() => import("./suppliers/suppliers.module").then(m=> m.SuppliersModule)
      },
      {
        path:"products",
        loadChildren:()=> import("./products/products.module").then(m=> m.ProductsModule)
      },
      {
        path:"offline-invoices",
        loadChildren:()=>import("./invoices/invoices.module").then(m=> m.InvoicesModule)

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
