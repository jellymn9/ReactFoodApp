import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Meals from "../Meals/Meals";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Meals />} />
    </Routes>
  );
}

export default AllRoutes;
