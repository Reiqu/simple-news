import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { GermanyComponent } from './germany/germany.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsaComponent } from './usa/usa.component';
import { UkComponent } from './uk/uk.component';
import { InfoComponent } from './info/info.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    GermanyComponent,
    AccountLoginComponent,
    AccountDetailsComponent,
    PageNotFoundComponent,
    UsaComponent,
    UkComponent,
    InfoComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
