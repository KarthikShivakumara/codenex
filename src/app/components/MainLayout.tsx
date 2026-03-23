import { Outlet } from "react-router";
import { LoadingAnimation } from "./LoadingAnimation";
import { useState, useEffect } from "react";

export function MainLayout() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <LoadingAnimation />;
  }

  return <Outlet />;
}
