import { Outlet } from "react-router-dom";
import { ROUTES } from "./const";
import Button from "./components/Button";
import "./css/Layout.css";

export default function Layout() {
  return (
    <>
      <header className="header">
        <Button to={ROUTES.HOME} className={"title"}>
          Soliflore
        </Button>
        <nav className="header-nav">
          <ul className="header-ul">
            <Button to={ROUTES.PROFILE} className={"header-button"}>
              Profile
            </Button>
            <Button to={ROUTES.PRODOCTS} className={"header-button"}>
              Products
            </Button>
            <Button to={ROUTES.SKILLS} className={"header-button"}>
              Skills
            </Button>
            <Button to={ROUTES.CONTACT} className={"header-button"}>
              Contact
            </Button>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <a
          href="https://github.com/solifIore"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="github"
        >
          github
        </a>
      </footer>
    </>
  );
}
