import { BrowserRouter as Router, Route, Routes } from "react-router";
import Customer from "./views/Customer";
import Agent from "./views/Agent";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Customer />} />
          <Route path={"/agent"} element={<Agent />} />
        </Routes>
      </Router>
    </>
  );
};
