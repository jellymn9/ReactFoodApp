import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import * as A from "src/store/auth/auth.actions";
import Login from "src/components/Login/Login";
import Meals from "src/components/Meals/Meals";
import RequireAuth from "src/components/Routes/RequireAuth";

function AllRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(A.setAutorization());
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Meals />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
