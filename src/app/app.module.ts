import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { AppRoutingModule } from './app-routing.module';
import { QueueComponent } from './queue/queue.component';

import { Injectable } from '@angular/core';
// import { TableDataService } from './table-data.service';

import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MusicComponent } from './music/music.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PopupComponent } from './popup/popup.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FirstComponent } from './first/first.component';
import { ShopifyComponent } from './shopify/shopify.component';
import { ShopComponent } from './shop/shop.component';

// import { MyPipePipe } from './my-pipe.pipe';
// import { Pipe, PipeTransform } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Pipe } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    QueueComponent,
    MusicComponent,
    NavbarComponent,
    PopupComponent,
    SigninComponent,
    SignupComponent,
    FirstComponent,
    ShopifyComponent,
    ShopComponent
    
    // MyPipePipe
    // MatDatepickerModule
    // MatNativeDateModule,
    
  ],
  imports: [
    BrowserModule,MatCardModule ,FormsModule,ReactiveFormsModule, AppRoutingModule, BrowserAnimationsModule,RouterModule,
    MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule,MatIconModule,HttpClientModule,MatSelectModule
    // Pipe// HttpClient,HttpErrorResponse

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
