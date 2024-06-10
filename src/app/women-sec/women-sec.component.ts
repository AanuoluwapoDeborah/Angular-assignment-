import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products.service';


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
  imports: [CommonModule, HttpClientModule],
  templateUrl: './women-sec.component.html',
  styleUrl: './women-sec.component.css'
})
export class WomenSecComponent {
  Products: Product[] = [];
  category: string = "Women's Latest";

  constructor(private allProducts: ProductsService, private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:2500/Allproducts')
    .subscribe((data: any)=>{
      console.log('Local Server Data : ', data);
      this.Products = data.filter((product: Product) => product.category === this.category);
      this.allProducts.storedProducts(this.Products);
      console.log("Products After Initialization : ", this.Products)
    },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }
}
