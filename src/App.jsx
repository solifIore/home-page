import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./const";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
