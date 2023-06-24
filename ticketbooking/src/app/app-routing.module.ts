import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketComponent } from './components/book-ticket/book-ticket.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { UpcomingmoviesComponent } from './components/upcomingmovies/upcomingmovies.component';

const routes: Routes = [{path:'home',component:HomeComponent},{path:'register',component:RegisterComponent},{path:'upcomingmovies',component:UpcomingmoviesComponent},{path:'book-ticket',component:BookTicketComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
