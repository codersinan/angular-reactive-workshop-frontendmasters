import { Component, ChangeDetectionStrategy, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "@app/core-data";

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  userLogin = { email: '', password: '' };
  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(){
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/'
  }
  login(email, password) {
    this.authService.login(email, password)
      .subscribe(result => {
        // Store the token
        this.authService.setToken(result['access_token']);
        // Redirect to home
        this.router.navigate([this.returnUrl]);
      });
  }
}
