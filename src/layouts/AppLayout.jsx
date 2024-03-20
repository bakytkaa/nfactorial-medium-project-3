import { Outlet } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";

export function AppLayout() {
  return (
    <div className="container">
      <Header />

      <main className="root-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
