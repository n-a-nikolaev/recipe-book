import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { AuthService } from '../services/auth.service';

@Directive({ selector: '[appShowOnlyForAuthenticated]' })
export class ShowForAuthenticatedDirective implements OnInit {
  @Input() set appShowOnlyForAuthenticated(condition: boolean) {
    this.condition = condition;
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) {}

  public condition!: boolean;

  ngOnInit() {
    this.authService.isAuthenticated.subscribe((isAuthenticated) => {
      console.log('isAuth', isAuthenticated);
      console.log('templateRef', this.templateRef);
      console.log('condition', this.condition);
      console.log('-='.repeat(50));
      if (
        (isAuthenticated && this.condition) ||
        (!isAuthenticated && !this.condition)
      ) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }
}
