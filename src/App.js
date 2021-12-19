import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SetupPage from "./pages/SetupPage";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [client, setClient] = useState();
  const [connected, setConnected] = useState();

  return (
    <div>
      <Router>
        <NavBar client={client} setConnected={setConnected} />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                connected={connected}
                setConnected={setConnected}
                client={client}
                setClient={setClient}
              />
            }
          />
          <Route path="/setup" element={<SetupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
