# Msal Angular Example

Example Angular CLI application to demonstrate https://github.com/benbaran/msal-angular .

## Change Log
2.0.0 - Updated to Angular 5 and msal-angular version 2
1.0.X - Initial Angular 4 version

## How this Sample was Created

1. Create the Application

```sh
npm install -g @angular/cli
ng new msal-angular-example --routing
```

2. Install Angular Material

```sh
npm install --save @angular/material @angular/cdk
```

3. Install Angular Animations and Import into app.module.ts

```sh
npm install --save @angular/animations
```

```js
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
```

4. Create a Material Module to Export the Needed Components

```sh
ng g module material
```

```js
import {MatButtonModule, MatToolbarModule} from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule, MatToolbarModule],
  exports: [MatButtonModule, MatToolbarModule]
  ...
})
```

5. Add Theming to Styles.css

```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

6. Install Hammer.js and Import into main.ts

```sh
npm install --save hammerjs
```

In main.ts:
```js
import 'hammerjs';
```

7. Add Material Icon Support

in index.html:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

8. Create a Toolbar Component to Handle Login

```sh
ng g component Toolbar
```

9. Install msal-angular and Import into App.module.ts

```sh
npm install --save msal-angular
```

```js
...
import { MsalModule } from 'msal-angular';
...

imports:
[
  ...
    [MsalModule.forRoot({
      clientID: 'eee52664-009c-4b22-9327-5aec0e623c98',
      graphScopes: ["openid"],
      signUpSignInPolicy: 'B2C_1_SiUpIn',
      tenant: 'xxx.onmicrosoft.com'
    })]
  ...
]
```


