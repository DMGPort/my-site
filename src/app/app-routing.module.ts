import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { WhoComponent } from './who/who.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';

import { WhatComponent } from './what/what.component';
import { ContactComponent } from './contact/contact.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'browse', component: BrowseComponent },
    { path: 'login', component: LogInComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'who', component: WhoComponent },
    { path: 'employee/:id', component: StaffDetailComponent },    
    { path: 'what', component: WhatComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
