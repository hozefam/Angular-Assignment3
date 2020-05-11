import { Product } from './../../product';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() product: Product;
  @Output() handleClose = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log('Update');
  }

  onClose() {
    console.log('Close Update');
    this.handleClose.emit(true);
  }
}
