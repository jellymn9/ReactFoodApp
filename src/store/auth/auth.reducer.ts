import {
  addTokenToLocalStorage,
  checkTokenExistance,
} from "../../helpers/loginHelper";
import { AuthActionT } from "./auth.types";
import * as C from "./auth.constants";

const defaultAuthState = {
  isUserAuthorized: false,
};

const login = (token: string) => {
  addTokenToLocalStorage(token);
  return { isUserAuthorized: checkTokenExistance() };
};

const auth = function (state = defaultAuthState, action: AuthActionT) {
  switch (action.type) {
    case C.LOGIN:
      return login(action.data);
    default:
      return state;
  }
};

export default auth;
