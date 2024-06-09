import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Allproducts: {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string
  }[] = [];

  storedProducts(
    data: { id: number; name: string; price: number; category: string; image: string}[]
  ) {
    this.Allproducts = data;
  }
}
