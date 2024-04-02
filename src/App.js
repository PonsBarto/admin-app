import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Resetpassword from "./components/pages/Resetpassword"
import Forgotpassword from "./components/pages/Forgotpassword"
import MainLayout from "./components/MainLayout"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />} />
        <Route index element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
