import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { UserService } from '@core/services';
import { Subscription } from 'rxjs';

@Directive({ selector: '[appShowOnlyForAuthenticated]' })
export class ShowAuthedDirective implements OnInit, OnDestroy {
  @Input() set appShowOnlyForAuthenticated(condition: boolean) {
    this.condition = condition;
  }

  public condition: boolean = false;

  private isAuthSubs!: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainer: ViewContainerRef
  ) {}

  public ngOnInit(): void {
    this.isAuthSubs = this.userService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => {
        // 1. If user is authenticated and we want to display element, we create embedded view
        // 2. If user is not authenticated and we do not want to display element, we create embedded view
        if (
          (isAuthenticated && this.condition) ||
          (!isAuthenticated && !this.condition)
        ) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

  public ngOnDestroy(): void {
    if (this.isAuthSubs) {
      this.isAuthSubs.unsubscribe();
    }
  }
}
