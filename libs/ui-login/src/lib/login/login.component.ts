import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "@app/core-data";

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  userLogin = { email: '', password: '' };
  constructor(private router: Router, private authService: AuthService) { }

  login(email, password) {
    this.authService.login(email, password)
      .subscribe(result => {
        // Store the token
        this.authService.setToken(result['access_token']);
        // Redirect to home
        this.router.navigate(['']);
      });
  }
}
