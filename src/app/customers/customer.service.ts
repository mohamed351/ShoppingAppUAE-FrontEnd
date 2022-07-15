import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Customer} from "../model/customer";
import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:String ="/api/customers";
  constructor(private http:HttpClient) { }

   createCustomer(customer:Customer){
   return  this.http.post(environment.BaseURL+this.url,customer);
  }
  getByID(id:number):Observable<Customer>{
    return this.http.get<Customer>(environment.BaseURL+this.url+`/${id}`);
  }
  editCustomer(id:number,customer:Customer){
    return this.http.put(environment.BaseURL+this.url+`/${id}`,customer);
  }
  deleteCustomer(id:number){
    return this.http.delete(environment.BaseURL+this.url+`/${id}`);
  }


}
