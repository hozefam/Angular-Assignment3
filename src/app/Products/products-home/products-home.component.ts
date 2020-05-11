import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from './../../product';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css'],
})
export class ProductsHomeComponent implements OnInit, OnChanges {
  @Input() products: Product[];
  selectedProduct: Product;
  selectedProductForUpdate: Product;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  handleSelectionChange(product) {
    this.selectedProduct = product;
    this.selectedProductForUpdate = null;
  }

  onClose(flag) {
    if (flag) {
      this.selectedProduct = null;
    }
  }

  onUpdateClose(flag) {
    if (flag) {
      this.selectedProductForUpdate = null;
    }
  }

  onUpdate(product) {
    this.selectedProductForUpdate = product;
  }
}
