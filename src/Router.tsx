import { Route, Routes, useLocation } from "react-router-dom";
import { Path } from "./pages/paths";
import { Home } from "./pages/Home";
import { AdminPanel } from "./pages/AdminPanel";
import { AnimatePresence } from "framer-motion";
import AdminLogin from "./pages/AdminLogin";

export const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.ADMIN} element={<AdminPanel />} />
        <Route path={Path.LOGIN} element={<AdminLogin />} />
      </Routes>
    </AnimatePresence>
  );
};
