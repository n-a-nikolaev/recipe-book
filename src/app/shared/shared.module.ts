import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { ShowAuthedDirective } from './directives';
import { TabsComponent } from './components/tabs/tabs.component';
import { BannerComponent } from './components/banner/banner.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TagListComponent } from './components/tag-list/tag-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    PasswordStrengthComponent,
    ShowAuthedDirective,
    TabsComponent,
    BannerComponent,
    SpinnerComponent,
    PaginationComponent,
    TagListComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PasswordStrengthComponent,
    ShowAuthedDirective,
    TabsComponent,
    BannerComponent,
    PaginationComponent,
    SpinnerComponent,
    TagListComponent,
  ],
})
export class SharedModule {}
