import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { useState } from "react";
import Logo from "./components/Logo.jsx";

function App() {
  const [logo, setLogo] = useState("defaultLogo.png");

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login logo={logo} setLogo={setLogo} />} />
      </Routes>
    </Router>
  );
}

export default App;
