import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core-data';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Angular Core Workshop';

  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
  isLoggedIn;
  links = [
    // { path: '/', icon: 'home', title: 'Home' },
    // { path: 'customers', icon: 'face', title: 'Customers' },
    { path: 'projects', icon: 'work', title: 'Projects' },
  ];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn$.subscribe(loggedIn => {
      const path = (loggedIn) ? '' : 'login';
      this.isLoggedIn = loggedIn;
      this.router.navigate([path]);
    });
  }

  logout() {
    this.authService.logout();
  }
}
