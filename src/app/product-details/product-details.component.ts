import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { AppServicesService } from "../app-services.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  idProduct;
  productDetalis: Product = {
    agreementCode: '',
    agreementDesc: '',
    agreementUrl: '',
    allowModify: true,
    basePrice: null,
    description: '',
    lastReleaseDate: '',
    lastVersion: '',
    maxNumberOfUsers: null,
    operatingSystem: '',
    packets: '',
    prgCode: null,
    productCode: null,
    productId: null,
    productName: '',
    variants: null,
    versions: null
  };

  constructor(
    private appServices: AppServicesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      (params) => (this.idProduct = parseInt(params["id"]))
    );
  }

  ngOnInit() {
    this.getProductId(this.idProduct);
  }

  getProductId(id){
    return this.appServices.getProduct(id).subscribe((data) => {
      this.productDetalis = data[0];
      console.log("pojedynczy", this.productDetalis);
    });
  }
}

export interface Product {
  agreementCode: string;
  agreementDesc: string;
  agreementUrl: string;
  allowModify: boolean;
  basePrice: number;
  description: string;
  lastReleaseDate: string;
  lastVersion: string;
  maxNumberOfUsers: number;
  operatingSystem: string;
  packets: string;
  prgCode: number;
  productCode: number;
  productId: number;
  productName: string;
  variants: Array<Variant>;
  versions: Array<Version>;
}

export interface Variant {
  maxNumberOfUsers: number;
  orderWWW: number;
  productId: number;
  variantCode: number;
  variantId: number;
  variantName: string;
}

export interface Version {
  compareNumber: number;
  number: number;
  productId: number;
  releaseDate: string;
  versionCode: number;
  versionId: number;
  versionNumber: string;
}
