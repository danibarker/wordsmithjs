import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SetupPage from "./pages/SetupPage";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/test" element={<TestPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/setup" element={<SetupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
