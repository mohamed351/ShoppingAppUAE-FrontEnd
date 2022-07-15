import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSerial } from 'src/app/model/full-product-serials';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-serials',
  templateUrl: './product-serials.component.html',
  styleUrls: ['./product-serials.component.scss']
})
export class ProductSerialsComponent implements OnInit {

  productSerial:ProductSerial[] = null;
  constructor(private productService:ProductService, private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(a=>{
        this.productService.getProductSerials(a["id"]).subscribe(data =>{
            this.productSerial = data;
        });
    });

  }

}
