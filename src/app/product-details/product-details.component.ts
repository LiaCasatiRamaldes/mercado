import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  
  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Pegando id da rota.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    //achando o produto com o msm id.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  
}


