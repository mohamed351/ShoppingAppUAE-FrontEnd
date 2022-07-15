import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http:HttpClient) { }

   getCustomersByName(name:string){

   }

   getProductSerial(serial:String){

   }


}
