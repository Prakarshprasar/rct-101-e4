import {legacy_createStore} from "redux"
import { authReducer } from "./auth/auth.reducer";
// TODO: use this store variable to create a store.

export const store = legacy_createStore(authReducer);

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
