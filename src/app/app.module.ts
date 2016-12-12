import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { WhoComponent } from './who/who.component';
import { LogInComponent } from './log-in/log-in.component';
import { ContactComponent } from './contact/contact.component';
import { WhatComponent } from './what/what.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { RegisterComponent } from './register/register.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WhoComponent,
    LogInComponent,
    ContactComponent,
    WhatComponent,
    HomeComponent,
    BrowseComponent,
    RegisterComponent,
    CarouselComponent,
    BurgerMenuComponent,
    StaffListComponent,
    StaffDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
