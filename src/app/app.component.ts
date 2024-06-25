import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HttpClientModule, AppRoutingModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductsService]
})
export class AppComponent {
  title = 'hexashop-clone';
}
