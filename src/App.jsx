import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./const";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
