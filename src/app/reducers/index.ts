import {
  ActionReducer
  // ActionReducerMap,
  // createFeatureSelector,
  // createSelector,
  // MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import {AuthActions, AuthActionTypes} from '../auth/auth.actions';
import {storeFreeze} from 'ngrx-store-freeze';
import {routerReducer} from '@ngrx/router-store';
import {AuthState, initialAuthState} from '../auth/auth.reducer';
import {state} from '@angular/animations';

type AuthState = {
  loggedIn: boolean,
  user: User
};

const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export interface AppState {
  auth: AuthState;
}

function authReducer(state: AuthState = initialAuthState, action): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      };
      default:
      return state;
  }
}

export const reducers = {
  router: routerReducer
};





export const metaReducers =
  !environment.production ? [storeFreeze] : [];
