import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "../router";
import Loader from "./components/Loader";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(!sessionStorage.getItem('appLoaded'));

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('appLoaded', 'true');
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return loading ? <Loader /> : <AppRouter />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
