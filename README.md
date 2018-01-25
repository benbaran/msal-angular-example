# Angular MSAL Example with Angular Material and Routing

This repository contains an example Angular application demonstrating how to use the Microsoft Authentication Library to authenticate users to the Azure AD v2.0 endpoint. Before using this example you will need to register your application here: https://apps.dev.microsoft.com/#/appList.

## Steps Taken to Create this Project

### Install Angular CLI

npm install -g @angular/cli@latest

### Create a New Application with Routing Enabled

ng new msal-angular-example --routing

### Create Home Component and Not Found Component

ng g component Home

ng g component NotFound

### Enable Routing to Set the Base Url to HomeComponent and Unknown Routes to NotFoundComponent

app-routing.module.ts:

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

### Install and Configure Angular Material

npm install --save @angular/material @angular/cdk

npm install --save @angular/animations

Add to app.module.ts:

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})

Add to styles.css:

@import "~@angular/material/prebuilt-themes/indigo-pink.css";

npm install --save hammerjs

Add to main.ts:

import 'hammerjs';

### Create a Material Module to Import and Export Material Components

ng g module Material

material.module.ts:

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }

Add to app.module.ts:

import { MaterialModule } from './material/material.module';

@NgModule({
  ...
  imports: [MaterialModule],
  ...
})

### Add a Toolbar with Login and Logout Buttons to the AppComponent

app.component.html:

<mat-toolbar color="primary">
  <span>Application Title</span>

  <!-- This fills the remaining space of the current row -->
  <span class="example-fill-remaining-space"></span>

  <button mat-button>Login</button>
  <button mat-button>Logout</button>
</mat-toolbar>
<router-outlet></router-outlet>

app.component.css:

.example-fill-remaining-space {
  flex: 1 1 auto;
}

### Install MSAL

npm install msal --save

### Create MsalService, MsalConfig and MsalGuard

ng g service msal/Msal

ng g class msal/MsalConfig

ng g guard msal/Msal

### Provide MsalService and MsalGuard

Add to app.module.ts:
...
  providers: [MsalService, MsalGuard],
...

### Update Home Route to Use MsalGuard

import { MsalGuard } from './msal/msal.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [MsalGuard]},
  {path: '**', component: NotFoundComponent}
];

### Update AppComponent with Login and Logout Feautures

app.component.html:

<mat-toolbar color="primary">
  <span>Application Title</span>

  <!-- This fills the remaining space of the current row -->
  <span class="example-fill-remaining-space"></span>

  <button mat-button *ngIf="!authenticated" (click)="login()">Login</button>
  <button mat-button *ngIf="authenticated" (click)="logout()">Logout</button>
</mat-toolbar>
<router-outlet></router-outlet>

app.component.ts:

import { Component } from '@angular/core';
import { MsalService } from './msal/msal.service';
import { MsalConfig } from './msal/msal-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  msalConfig: MsalConfig = {
    clientID: '2f55903b-679c-469c-a63d-298a0dd567b2',
    redirectUri: location.origin,
    graphScopes: ['https://graph.microsoft.com/user.read']
  };

  constructor(private msalService: MsalService) {
    msalService.init(this.msalConfig);
  }

  login() {
    this.msalService.login();
  }

  logout() {
    this.msalService.logout();
  }

  get authenticated(): boolean {
    return this.msalService.authenticated;
  }
}
