import { Injectable, TemplateRef } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly delay: number = 4000;

  constructor(public toastService: ToastService) {}

  showStandard(template: TemplateRef<any> | string) {
    this.toastService.show(template);
  }

  showSuccess(template: TemplateRef<any> | string) {
    this.toastService.show(template, {
      classname: 'bg-success text-light',
      delay: this.delay,
    });
  }

  showDanger(template: TemplateRef<any> | string) {
    this.toastService.show(template, {
      classname: 'bg-danger text-light',
      delay: this.delay,
    });
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }
}
