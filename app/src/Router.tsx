import { BrowserRouter as Router, Route, Routes } from "react-router";
import Agent from "@/views/Agent";
import Customer from "@/views/Customer";

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
