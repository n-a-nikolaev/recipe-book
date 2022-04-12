import { Component, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

// State
import { UIState } from 'src/state/core';
import { AppState } from 'src/state/core/app-state-interface';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ng-recipe-book';
  public item$: Observable<any[]> = of([]);
  public ui$: Observable<UIState> | null = null;

  constructor(store: Store<AppState>) {
    this.ui$ = store.select('ui');
    // this.renderer.addClass(document.body, 'hide-overflow');
  }
}
