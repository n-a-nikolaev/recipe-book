import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, NotificationService } from '@shared/services';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public currentUser: User | null = null;
  public navShown: boolean = true;
  public defaultAvatarUrl: string =
    'https://static.productionready.io/images/smiley-cyrus.jpg';
  private currentUserSub!: Subscription;

  constructor(
    private authService: AuthService,
    private notification: NotificationService,
    private router: Router
  ) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.currentUserSub.unsubscribe();
  }

  public toggleNav(): void {
    this.navShown = !this.navShown;
  }

  public signOut(): void {
    this.authService
      .signOut()
      .then(() => {
        this.notification.showSuccess("You've successfully signed out!");
        this.router.navigate(['login']);
      })
      .catch((e) => {
        this.notification.showDanger('Something went wrong');
      });
  }
}
