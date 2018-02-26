import { Component, OnInit } from '@angular/core';
import { MsalService } from 'msal-angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private msalService: MsalService) { }

  ngOnInit() {
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
