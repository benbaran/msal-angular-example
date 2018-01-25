npm install -g @angular/cli@latest

ng new msal-angular-example --routing

ng g component Home

ng g component NotFound

Edit app-routing.module.ts:

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

Install and Coonfigure Angular Material:

npm install --save @angular/material @angular/cdk

npm install --save @angular/animations

Edit app.module.ts:

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

ng g module Material

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

Add MaterialModule to imports in app.module.ts.

<mat-toolbar color="primary">
  <span>Application Title</span>

  <!-- This fills the remaining space of the current row -->
  <span class="example-fill-remaining-space"></span>

  <button mat-button>Login</button>
  <button mat-button>Logout</button>
</mat-toolbar>
<router-outlet></router-outlet>

.example-fill-remaining-space {
  flex: 1 1 auto;
}


npm install msal --save
ng g service msal/Msal
ng g class msal/MsalConfig
ng g guard msal/Msal