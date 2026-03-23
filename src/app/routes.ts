import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./components/HomePage";
import { StudentLogin } from "./components/StudentLogin";
import { StudentDashboard } from "./components/StudentDashboard";
import { AdminLogin } from "./components/AdminLogin";
import { AdminPanel } from "./components/AdminPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "student-login", Component: StudentLogin },
      { path: "student-dashboard", Component: StudentDashboard },
      { path: "admin-login", Component: AdminLogin },
      { path: "admin-panel", Component: AdminPanel },
    ],
  },
]);
