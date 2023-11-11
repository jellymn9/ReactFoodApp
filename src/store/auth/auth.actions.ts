import * as C from "./auth.constants";

export const login = (payload: string) => ({
  type: C.LOGIN,
  data: payload,
});

export const setAutorization = () => ({
  type: C.SET_AUTHORIZATION,
});
