import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPayload, AuthResponse } from '@core/interfaces';
import { AuthService, NotificationService } from '@shared/services';
import { AuthFormType } from 'src/app/core/enums/auth-form-type.enum';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public readonly type: AuthFormType = AuthFormType.Login;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService
  ) {}

  public onSubmission(payload: AuthPayload): void {
    this.authService
      .signIn(payload.email, payload.password)
      .then((response: AuthResponse) => {
        if (response.authenticated) {
          this.notification.showSuccess('User login successfully!');
          this.router.navigate(['dashboard']);
        } else {
          this.notification.showDanger(
            response.error?.message || 'Something went wrong!'
          );
        }
      })
      .catch((response) => {
        this.notification.showDanger(
          response.error?.message || 'Something went wrong!'
        );
      });
  }
}
