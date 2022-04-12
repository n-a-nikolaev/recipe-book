import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, NotificationService } from '@shared/services';
import { AuthPayload, AuthResponse } from '@core/interfaces';
import { AuthFormType } from 'src/app/core/enums/auth-form-type.enum';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  public readonly type: AuthFormType = AuthFormType.Register;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService
  ) {}

  public onSubmission(payload: AuthPayload): void {
    this.authService
      .signUp(payload.email, payload.password)
      .then((response: AuthResponse) => {
        if (response.authenticated) {
          this.notification.showSuccess('User successfully created!');
          this.router.navigate(['dashboard']);
        } else {
          this.notification.showDanger(
            response.error?.message || 'Something went wrong!'
          );
        }
      });
  }
}
