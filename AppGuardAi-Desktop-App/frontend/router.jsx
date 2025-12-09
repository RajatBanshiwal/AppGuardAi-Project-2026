import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Features from "./src/pages/AppScan";
import AppLayout from "./src/App";
import Reports from "./src/pages/Reports";
import ThreatIntelligence from "./src/pages/ThreatIntelligence";
import Settings from "./src/pages/Settings";
import MlModels from "./src/pages/MlModels";
import AnalyticsDashboard from "./src/pages/Analytics";
import AlertsPanel from "./src/pages/Alerts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/features/scan", element: <Features /> },
      { path: "/features/reports", element: <Reports /> },
      { path: "/features/threat-intelligence", element: <ThreatIntelligence /> },
      { path: "/settings", element: <Settings /> },
      { path: "/ml-models", element: <MlModels /> },
      { path: "/analytics", element: <AnalyticsDashboard /> },
      { path: "/features/alerts", element: <AlertsPanel /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
