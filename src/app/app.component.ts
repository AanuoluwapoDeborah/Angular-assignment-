import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';

import { FirstSecComponent } from './first-sec/first-sec.component';
import { MenSecComponent } from './men-sec/men-sec.component';
import { WomenSecComponent } from './women-sec/women-sec.component';
import { KidsSecComponent } from './kids-sec/kids-sec.component';
import { ExploreSecComponent } from './explore-sec/explore-sec.component';
import { SocialMediaSecComponent } from './social-media-sec/social-media-sec.component';
import { SubscribtionSecComponent } from './subscribtion-sec/subscribtion-sec.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent,
    HttpClientModule,
    FirstSecComponent, 
    MenSecComponent, 
    WomenSecComponent, 
    KidsSecComponent, 
    ExploreSecComponent, 
    SocialMediaSecComponent, 
    SubscribtionSecComponent, 
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductsService]
})
export class AppComponent {
  title = 'hexashop-clone';
}
