import { Component, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { UIState } from 'src/state/core';
import { AppState } from 'src/state/core/app-state-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ng-recipe-book';
  public item$: Observable<any[]> = of([]);
  public ui$: Observable<UIState> | null = null;

  constructor(store: Store<AppState>, firestore: Firestore, private renderer: Renderer2) {
    this.ui$ = store.select('ui');
    const coll = collection(firestore, 'recipes');
    this.item$ = collectionData(coll);
    this.renderer.addClass(document.body, 'hide-overflow');
  }
}
