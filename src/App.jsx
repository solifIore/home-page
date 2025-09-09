import "./css/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./const";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import ProfilePage from "./pages/ProfilePage";
import ProductsPage from "./pages/ProductsPage";
import Skilpage from "./pages/Skilpage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.PRODOCTS} element={<ProductsPage />} />
          <Route path={ROUTES.SKILLS} element={<Skilpage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
