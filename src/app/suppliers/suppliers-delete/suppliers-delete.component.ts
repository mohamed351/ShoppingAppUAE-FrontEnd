import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-delete',
  templateUrl: './suppliers-delete.component.html',
  styleUrls: ['./suppliers-delete.component.scss']
})
export class SuppliersDeleteComponent implements OnInit {
  customer:Customer = null;
  constructor(private customerService:SupplierService, private activeRouter:ActivatedRoute, private router:Router) { 
  
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(a=>{
     this.customerService.getByID(a["id"]).subscribe(c=>{
      this.customer = c;
     });
    });
  }

  navigateBack():void{
    this.router.navigate(["/suppliers"]);

  }
  deleteCustomer(id:number):void{
    this.customerService.deleteCustomer(id).subscribe(a=>{
      this.router.navigate(["/suppliers"]);
    },(error)=>{

    })
  }

}
