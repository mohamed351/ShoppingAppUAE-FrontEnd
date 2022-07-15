import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serial } from 'src/app/model/serial';

@Component({
  selector: 'app-product-serials-list',
  templateUrl: './product-serials-list.component.html',
  styleUrls: ['./product-serials-list.component.scss']
})
export class ProductSerialsListComponent implements OnInit {

@ViewChildren("#subSerials") subElements;
   public currentList:Serial[] = []
   public id:number;
  constructor(private activeRouter:ActivatedRoute) {

   }




  ngOnInit(): void {

    this.activeRouter.params.subscribe(route =>{
      this.id = route["id"];
    });
  }

  addMainSerail(event,input:HTMLInputElement){
    console.log(event);
    if(event.key =="Enter"){

      this.currentList.push({
        productId:this.id,
        serial : input.value,
        subSerial:[]
      })
      input.value = "";
        setInterval(()=>{
          (document.getElementsByClassName("current-serial")[0] as HTMLInputElement).focus();
        },100)

    }


  }

  deleteMainBarCode (serial:Serial){
    this.currentList = this.currentList.filter(a=> a.serial !== serial.serial);
  }
  addSubSerial(event,serial:Serial, input:HTMLInputElement ){
    if(event.key =="Enter"){
      this.currentList.find(a=> a.serial ==  serial.serial).subSerial.push({
        mainSerial:serial.serial,
        serial:input.value
      });
      input.value ="";
    }
  }





}
