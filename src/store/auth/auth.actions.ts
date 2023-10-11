import * as T from "./auth.types";
import * as C from "./auth.constants";

export const login = (payload: string) => ({
  type: C.LOGIN,
  data: payload,
});
