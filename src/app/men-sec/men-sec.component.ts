import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};


@Component({
  selector: 'app-men-sec',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './men-sec.component.html',
  styleUrl: './men-sec.component.css'
})
export class MenSecComponent {
  Products: Product[] = [];
  category: string = "Men's Latest";

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
