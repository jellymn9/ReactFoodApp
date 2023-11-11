import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import { StateType } from "src/store";

const RequireAuth = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  // check out ReactElement
  const isUserAuthorized = useSelector<StateType, boolean>(
    (state) => state.auth.isUserAuthorized
  );

  if (!isUserAuthorized) {
    <Navigate to="/login" replace={true} />; // add state and replace
  }
  return <>{children}</>;
};

export default RequireAuth;
