import { products } from './../products';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = products;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
    });
    //query params
    this.route.queryParamMap.subscribe((params) => {
      console.log(params);
      console.log(params.get('order'));
    });
  }
  loadProducts() {
    this.router.navigate(['/products'], {
      queryParams: {
        page: 1,
      },
    });
  }
}
