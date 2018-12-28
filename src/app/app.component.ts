import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from './reducers';
import {Logout} from './auth/auth.actions';
import {map} from 'rxjs/operators';
import {isLoggedIn, isLoggedOut} from './auth/auth.selectors';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;

    isLoggedOut$: Observable<boolean>;


    constructor(private store: Store<AppState>, private router: Router) {

    }

    ngOnInit() {
      // uses isLoggedIn && isLoggedOut selectors to subscribe to only the info needed
      this.isLoggedIn$ = this.store
        .pipe(
          select(isLoggedIn)
        ); // select() maps through but also removes dups

      this.isLoggedOut$ = this.store
        .pipe(
          select(isLoggedOut)
        );

    }

    logout() {

      this.store.dispatch(new Logout());
      // new instance of logout action class
    }


}
