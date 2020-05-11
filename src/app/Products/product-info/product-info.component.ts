import { Product } from './../../product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  @Input() product: Product;
  @Output() handleClose = new EventEmitter();
  @Output() handleUpdate = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.handleClose.emit(true);
  }

  onUpdate() {
    this.handleUpdate.emit(this.product);
  }
}
