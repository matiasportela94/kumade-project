
// Landing
import Landing from "../pages/landing/Landing";

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard";

// Routes
const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: Landing,
  children: null
};

const dashboardRoutes = {
  path: "/dashboard",
  name: "Dashboard Page",
  component: Dashboard,
  children: null
};

// Dashboard specific routes
export const dashboard = [
  dashboardRoutes
];

// Landing specific routes
export const landing = [landingRoutes];
