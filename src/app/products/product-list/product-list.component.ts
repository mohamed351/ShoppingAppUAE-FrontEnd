import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ListPager2 } from 'src/app/model/products';
import { Product } from 'src/app/model/products';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

 
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
    console.log(environment);
    this.httpClient.get<ListPager2<Product>>(environment.BASEURL_SHOPPING_APP+"/api/Products?start=0&length=10").subscribe(a=>{
       this.count = a.metaData.recordsFiltered;
      
       this.loadingIndicator = false;
       this.rows = [];
       for (const iterator of a.data) {
        console.log(iterator);
          this.rows.push(iterator);
       }
    });
  }

  ClickPage(d:any){
    this.httpClient.get<ListPager2<Product>>(environment.BASEURL_SHOPPING_APP+`/api/Products?start=${(d.offset * d.limit)}&length=${d.limit}`).subscribe(a=>{
      console.log(a.metaData.recordsFiltered);
      this.count = a.metaData.recordsFiltered;
      this.loadingIndicator = false;
      this.rows = [];
      for (const iterator of a.data) {
         this.rows.push(iterator);
      }
   });

}

}
