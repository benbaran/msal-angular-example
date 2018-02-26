import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MsalModule } from 'msal-angular';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    [MsalModule.forRoot({
      clientID: environment.clientID,
      graphScopes: environment.graphScopes,
      signUpSignInPolicy: environment.signUpSignInPolicy,
      tenant: environment.tenant
    })]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
