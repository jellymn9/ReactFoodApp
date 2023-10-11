import * as C from "./auth.constants";
import { IAction, IActionWithPayload } from "../types";

export interface login extends IActionWithPayload<typeof C.LOGIN, string> {}

export type AuthActionT = login;
