import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() selectionChanged = new EventEmitter();
  selectedProduct: Product;

  constructor() {}

  ngOnInit(): void {}

  selectProduct(event, id) {
    this.setActiveLink(event);
    this.selectedProduct = this.products.find((x) => x.id === id);
    this.selectionChanged.emit(this.selectedProduct);
  }

  setActiveLink(event) {
    document.querySelectorAll('.item').forEach((element) => {
      element.classList.remove('active');
    });
    event.target.setAttribute('class', 'item active');
  }
}
