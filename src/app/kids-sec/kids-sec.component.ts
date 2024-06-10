import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../products.service';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};
@Component({
  selector: 'app-kids-sec',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './kids-sec.component.html',
  styleUrl: './kids-sec.component.css'
})
export class KidsSecComponent {
  Products: Product[] = [];
  category: string = "Kid's Latest";

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
