import {createSelector} from '@ngrx/store';


export const selectAuthState = state => state.auth;
// selects only auth state

export const isLoggedIn = createSelector(
  selectAuthState, // auth state
  auth => auth.loggedIn // selects only loggedIn flag from auth state
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
