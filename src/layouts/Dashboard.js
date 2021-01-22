import React from "react";

import Main from "../components/Main";

const Dashboard = ({ children }) => (
  <React.Fragment>
    <Main>{children}</Main>
  </React.Fragment>
);

export default Dashboard;
