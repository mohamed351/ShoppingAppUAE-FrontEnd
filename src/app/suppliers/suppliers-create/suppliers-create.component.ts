import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customers/customer.service';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-create',
  templateUrl: './suppliers-create.component.html',
  styleUrls: ['./suppliers-create.component.scss']
})
export class SuppliersCreateComponent implements OnInit {

  form:FormGroup = new FormGroup({
    id: new FormControl("0",{validators:[Validators.required]}),
    name: new FormControl("",{validators:[Validators.required]}),
    phone:new FormControl("",{validators:[Validators.required]}),
    email:new FormControl("",{validators:[Validators.email]}),
    isDeleted: new FormControl(false,{validators:[Validators.required]})

  });
  isLoading:boolean =false;
  public get Name():AbstractControl{
    return this.form.get("name");
  }
  public get Phone():AbstractControl{
    return this.form.get("phone");
  }
  public get Email():AbstractControl{
    console.log( this.form.valid);
    return this.form.get("email");
  }
 
  constructor(private customerService:SupplierService, private router:Router) { }

  ngOnInit(): void {
  

  }
  SaveCustomer(){
    this.isLoading = true;
    this.customerService.createCustomer(this.form.value).subscribe(a=>{
      console.log(a);
      this.isLoading = false;
      this.router.navigate(["/suppliers"]);

    },(error=>{
      console.error(error);
      this.isLoading = false;
    }));

  }
}
