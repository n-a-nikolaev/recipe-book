import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BannerComponent } from './components/banner/banner.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ShowForAuthenticatedDirective } from './directives';
import { ToastComponent } from './components/toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    PasswordStrengthComponent,
    ShowForAuthenticatedDirective,
    TabsComponent,
    BannerComponent,
    SpinnerComponent,
    PaginationComponent,
    TagListComponent,
    ToastComponent,
    AuthFormComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PasswordStrengthComponent,
    ShowForAuthenticatedDirective,
    TabsComponent,
    BannerComponent,
    PaginationComponent,
    SpinnerComponent,
    TagListComponent,
    AuthFormComponent,
    ToastComponent,
  ],
})
export class SharedModule {}
