import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  

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
  constructor(private activeRouter:ActivatedRoute, 
    private customerService:CustomerService,
    private router:Router) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(a=>{
    this.customerService.getByID(a["id"]).subscribe(a=>{
      this.Name.setValue(a.name);
      this.Email.setValue(a.email);
      this.Phone.setValue(a.phone);
      this.form.get("id").setValue(a.id);
    });
    });
  }
  SaveCustomer(){
    this.isLoading = true;
    this.customerService.editCustomer(this.form.get("id").value as number,this.form.value).subscribe(a=>{
      this.isLoading=false;
    this.router.navigate(["/customers"]);
    

    },(error=>{
      this.isLoading= false;

    }));
  }


}
