import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { FooterComponent } from './units/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArtformsComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    SinglepageComponent,
    FooterComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
