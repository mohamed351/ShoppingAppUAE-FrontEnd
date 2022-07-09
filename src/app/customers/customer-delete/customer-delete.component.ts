import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.scss']
})
export class CustomerDeleteComponent implements OnInit {

  customer:Customer = null;
  constructor(private customerService:CustomerService, private activeRouter:ActivatedRoute, private router:Router) { 
  
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(a=>{
     this.customerService.getByID(a["id"]).subscribe(c=>{
      this.customer = c;
     });
    });
  }

  navigateBack():void{
    this.router.navigate(["/customers"]);

  }
  deleteCustomer(id:number):void{
    this.customerService.deleteCustomer(id).subscribe(a=>{
      this.router.navigate(["/customers"]);
    },(error)=>{

    })
  }

}
