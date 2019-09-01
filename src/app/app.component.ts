import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'perx';
  reason = '';

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  constructor(private router: Router) {
  }

  isLanding() {
    return this.router.url === '/home' || this.router.url === '/';
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
