import { products } from './../../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  selectedProduct;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // let id = +this.route.snapshot.paramMap.get('id');
    // this.selectedProduct = products.find((i) => i.id === id);
    this.route.paramMap.subscribe((params) => {
      let id = +params.get('id');
      this.selectedProduct = products.find((i) => i.id === id);
    });
  }
}
