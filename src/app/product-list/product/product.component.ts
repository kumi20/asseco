import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;
  @Input() view;
  
  constructor() { }

  ngOnInit() {
  }

}
