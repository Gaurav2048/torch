import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import Login from "../pages/Login";
import PrimaryNavigation from "../components/PrimaryNavigation";

const AppRouter: React.FC = () => {
  const boardId = "66c0238dddbf67fa4ef150f3"; // Need to change to local storage later

  return (
    <Router>
      <PrimaryNavigation>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/dashboard/${boardId}/funnel`} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/members/*" element={<Users />} />
          <Route path="/members/create" element={<Users />} />
        </Routes>
      </PrimaryNavigation>
    </Router>
  );
};

export default AppRouter;
