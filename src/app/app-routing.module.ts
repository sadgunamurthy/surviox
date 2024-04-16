import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { RouterModule, Routes } from '@angular/router';
import { QueueComponent } from './queue/queue.component';
import { MusicComponent } from './music/music.component';
import { PopupComponent } from './popup/popup.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FirstComponent } from './first/first.component';
import { ShopifyComponent } from './shopify/shopify.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'music', component: MusicComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'first', component: FirstComponent },
  { path: 'shopify', component: ShopifyComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', redirectTo: 'review' }

   
];
@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
