import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthPayload } from '@core/interfaces';
import { AuthFormType } from 'src/app/core/enums/auth-form-type.enum';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  @Input()
  public title!: string;

  @Input()
  public type!: AuthFormType;

  @Output()
  public onFormSubmission: EventEmitter<AuthPayload> = new EventEmitter<AuthPayload>();

  public authForm!: FormGroup;

  public get buttonLabel(): string {
    return this.type === AuthFormType.Login ? 'Sign In' : 'Sign Up';
  }

  constructor() {}

  public ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }

  public submit(): void {
    if (this.authForm.valid) {
      this.onFormSubmission.emit(this.authForm.value);
    }
  }
}
