import React from "react";
import { Route, Routes } from "react-router-dom";
import FunnelPage from "../pages/Dashboard/FunnelPage";
import Notes from "../pages/Notes";

const DashboardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path=":boardId/funnel" element={<FunnelPage />} />
      <Route path=":boardId/notes" element={<Notes />} />
      <Route
        path=":boardId/funnel/create/task/:columnId"
        element={<FunnelPage />}
      />
      <Route path=":boardId/funnel/createboard" element={<FunnelPage />} />
      <Route
        path=":boardId/funnel/view/task/:taskId"
        element={<FunnelPage />}
      />
    </Routes>
  );
};

export default DashboardRoutes;
