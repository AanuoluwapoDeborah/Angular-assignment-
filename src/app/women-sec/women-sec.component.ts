import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-women-sec',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './women-sec.component.html',
  styleUrl: './women-sec.component.css'
})
export class WomenSecComponent {
  productList = [
    {
      id: 1,
      image: "assets/images/women-01.jpg",
      name: "New Green Jacket",
      price: 75
    },
    {
      id: 2,
      image: "assets/images/women-02.jpg",
      name: "Classic Dress",
      price: 45
    },
    {
      id: 3,
      image: "assets/images/women-03.jpg",
      name: "Spring Collection",
      price: 130
    }
  ]
}
