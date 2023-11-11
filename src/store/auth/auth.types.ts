import { IAction, IActionWithPayload } from "src/store/types";
import * as C from "./auth.constants";

export interface login extends IActionWithPayload<typeof C.LOGIN, string> {}

export interface setAutorization extends IAction<typeof C.SET_AUTHORIZATION> {}

export type AuthActionT = login | setAutorization;
