import { Routes } from '@angular/router';
import { FirstSecComponent } from './first-sec/first-sec.component';
import { MenSecComponent } from './men-sec/men-sec.component';
import { WomenSecComponent } from './women-sec/women-sec.component';
import { KidsSecComponent } from './kids-sec/kids-sec.component';
import { ExploreSecComponent } from './explore-sec/explore-sec.component';
import { SocialMediaSecComponent } from './social-media-sec/social-media-sec.component';
import { SubscribtionSecComponent } from './subscribtion-sec/subscribtion-sec.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path: "first_sec", component: FirstSecComponent},
];
