import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kids-sec',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kids-sec.component.html',
  styleUrl: './kids-sec.component.css'
})
export class KidsSecComponent {
  productList = [
    {
      id: 1,
      image: "assets/images/kid-01.jpg",
      name: "School Collection",
      price: 80
    },
    {
      id: 2,
      image: "assets/images/kid-02.jpg",
      name: "Summer Cap",
      price: 12
    },
    {
      id: 3,
      image: "assets/images/kid-03.jpg",
      name: "Classic Kid",
      price: 30
    }
  ]
}
