import { Component } from '@angular/core';
import { FirstSecComponent } from '../first-sec/first-sec.component';
import { MenSecComponent } from '../men-sec/men-sec.component';
import { WomenSecComponent } from '../women-sec/women-sec.component';
import { KidsSecComponent } from '../kids-sec/kids-sec.component';
import { ExploreSecComponent } from '../explore-sec/explore-sec.component';
import { SocialMediaSecComponent } from '../social-media-sec/social-media-sec.component';
import { SubscribtionSecComponent } from '../subscribtion-sec/subscribtion-sec.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FirstSecComponent, MenSecComponent, WomenSecComponent, KidsSecComponent, ExploreSecComponent, SocialMediaSecComponent, SubscribtionSecComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
