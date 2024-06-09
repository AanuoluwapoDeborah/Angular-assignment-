import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-men-sec',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './men-sec.component.html',
  styleUrl: './men-sec.component.css'
})
export class MenSecComponent {
  Products : {id : number, name : string, price : number, image: string, category : string}[] = []

  constructor(private allProducts: ProductsService, private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:2500/Allproducts')
    .subscribe(
      (data)=>{
        console.log('Local Server Data : ', data);
        this.allProducts.storedProducts(data as any);
        this.Products = this.allProducts.Allproducts;
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
    console.log("Products After Initialization : ", this.Products)
  }
}
