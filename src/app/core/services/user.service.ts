import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isAuthenticated: Observable<boolean> = of(true);

  constructor() {}
}
