import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {
  product: any;
  orderCount: number = 1;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));


    this.http.get<Product[]>(`http://localhost:2500/Allproducts/${productId}`).subscribe(product => {
       this.product = product
    });
  }
  increaseOrder(): void {
    this.orderCount++;
  }

  decreaseOrder(): void {
    if (this.orderCount > 1) {
      this.orderCount--;
    }
  }
}

