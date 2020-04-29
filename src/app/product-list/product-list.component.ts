import { Component, OnInit } from "@angular/core";
import { AppServicesService } from '../app-services.service';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  view: string = "listView";
  productList: any = [];

  constructor(private appServices: AppServicesService) {
     if(localStorage.getItem('viewProductList')) this.view = localStorage.getItem('viewProductList');
  }

  ngOnInit() {
    this.getProductList();
  }

  getProductList(){
    return this.appServices.getProducts().subscribe((data) => {
        this.productList = data;
    })
  }

  viewChanged(){
    localStorage.setItem('viewProductList', this.view)
  }
}
