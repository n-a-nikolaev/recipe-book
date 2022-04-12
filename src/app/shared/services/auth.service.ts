import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { AuthResponse } from 'src/app/core/interfaces/auth-response.interface';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userData: any; // Save logged in user data

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    public angularFirestore: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning,
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.isAuthenticatedSubject.next(true);
      } else {
        localStorage.setItem('user', 'null');
        this.isAuthenticatedSubject.next(false);
      }
    });
  }

  public async signIn(email: string, password: string): Promise<AuthResponse> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.setUserData(result.user);

      return new Promise((resolve, reject) => {
        resolve({
          authenticated: true,
          error: null,
        });
      });
    } catch (error: any) {
      return new Promise((resolve, reject) => {
        reject({
          authenticated: false,
          error,
        });
      });
    }
  }

  public async signUp(email: string, password: string): Promise<AuthResponse> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      this.setUserData(result.user);

      return new Promise((resolve, reject) => {
        resolve({
          authenticated: true,
          error: null,
        });
      });
    } catch (error: any) {
      return new Promise((resolve, reject) => {
        reject({
          authenticated: false,
          error,
        });
      });
    }
  }

  public setUserData(user: any): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(
      `users/${user.uid}`
    );

    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }

  public async signOut(): Promise<void> {
    try {
      await this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
      });

      return new Promise((resolve, reject) => {
        resolve();
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject();
      });
    }
  }
}
