import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './components/projects/projects.component';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    NavComponent,
    ProjectsComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
