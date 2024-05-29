import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl!: string;

  login(email: string, password: string): Observable<boolean>{
    const isLoggedIn = (email == '123@co.uk' && password == 'azerty') || (email == '123@co.uk' && password == 'qwerty');
    return of(isLoggedIn).pipe(
      delay(1500),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(){
    this.isLoggedIn = false;
  }

}
