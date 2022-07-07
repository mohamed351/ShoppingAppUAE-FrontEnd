import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  rows = [];
  count = 0;
  loadingIndicator = true;
  page = {
 limit: 10,
 count: 0,
 offset: 0,
 orderBy: 'myColumn1',
 orderDir: 'desc',
 pageSize: 10
};
  columnMode:ColumnMode = ColumnMode.force;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>(environment.BaseURL+"/api/Customers").subscribe(a=>{
       this.count = a.recordsFiltered;
       this.loadingIndicator = false;
       this.rows = [];
       for (const iterator of a.data) {
          this.rows.push(iterator);
       }
    });
  }

  ClickPage(d:any){
    this.httpClient.get<any>(environment.BaseURL+`/api/Customers?start=${(d.offset * d.limit)}&length=${d.limit}`).subscribe(a=>{
      this.count = a.recordsFiltered;
      this.loadingIndicator = false;
      this.rows = [];
      for (const iterator of a.data) {
         this.rows.push(iterator);
      }
   });
  }

  


}



// docs


// fgsViewPlansList:any=[];
// page = {
//  limit: 10,
//  count: 0,
//  offset: 0,
//  orderBy: 'myColumn1',
//  orderDir: 'desc',
//  pageSize: 10
// };
// ngOnInit(){
// this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response=>{
//  this.fgsViewPlansList=(response);
//  this.fgsViewPlansList=[...this.fgsViewPlansList];
//   console.log(this.fgsViewPlansList)
// })
// }
// datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {}
// }