# MsalAngularExample

npm install --save @angular/material @angular/cdk

npm install --save @angular/animations

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})

ng g module material


import {MatButtonModule, MatToolbarModule} from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule, MatToolbarModule],
  exports: [MatButtonModule, MatToolbarModule]
  ...
})


styles.css:

@import "~@angular/material/prebuilt-themes/indigo-pink.css";

npm install --save hammerjs

main.ts:

import 'hammerjs';

index.html:

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

ng g component Toolbar


MSAL

npm install  --save msal-angular

import { MsalModule } from 'msal-angular';

    [MsalModule.forRoot({
      clientID: 'eee52664-009c-4b22-9327-5aec0e623c98',
      graphScopes: ["openid"],
      signUpSignInPolicy: 'B2C_1_SiUpIn',
      tenant: 'xxx.onmicrosoft.com'
    })]


ng g component Home
ng g component NotFound



