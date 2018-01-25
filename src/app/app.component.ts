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
