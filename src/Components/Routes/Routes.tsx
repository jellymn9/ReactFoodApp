import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { StateType } from "../../store/index";
import Login from "../Login/Login";
import Meals from "../Meals/Meals";

function AllRoutes() {
  const isUserAuthorized = useSelector<StateType, boolean>(
    (state) => state.auth.isUserAuthorized
  );
  return (
    <Routes>
      {isUserAuthorized ? (
        <>
          <Route path="/" element={<Meals />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
        </>
      )}
    </Routes>
  );
}

export default AllRoutes;
