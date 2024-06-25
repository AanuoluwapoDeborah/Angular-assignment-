import { Routes } from '@angular/router';
import { SingleProductComponent } from './single-product/single-product.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: "product/:id", component: SingleProductComponent},
    {path: "about", component: AboutComponent}
];