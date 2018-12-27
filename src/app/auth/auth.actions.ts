import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

// contains one entry per action that belongs to module
export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
}

// login action
export class Login implements Action {
// unique string identifier from above
  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: { user: User }) {}

}


export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;

}


export type AuthActions = Login | Logout;
