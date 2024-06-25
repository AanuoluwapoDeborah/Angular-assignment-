import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};
@Component({
  selector: 'app-women-sec',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './women-sec.component.html',
  styleUrl: './women-sec.component.css'
})
export class WomenSecComponent {
  Products: Product[] = [];
  category: string = "Women's Latest";

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:2500/Allproducts')
      .subscribe(data => {
        this.Products = data.filter(product => product.category === this.category);
      }, error => {
        console.error('Error: ', error);
      });
  }
}
