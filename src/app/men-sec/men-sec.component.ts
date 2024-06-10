import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


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
  imports: [CommonModule, HttpClientModule],
  templateUrl: './men-sec.component.html',
  styleUrl: './men-sec.component.css'
})
export class MenSecComponent {
  Products: Product[] = [];
  category: string = "Men's Latest";

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
