import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { Serial } from '../model/serial';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  baseURL :String = environment.BaseURL;
  baseURL_SHOPPING
  constructor(private http:HttpClient) {

  }

   AddProductSerail(serail:Serial[]){
      return this.http.post(this.baseURL+"/api/ProductSerials",serail);
  }


}
