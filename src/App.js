import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword"
import Forgotpassword from "./pages/Forgotpassword"
import MainLayout from "./components/MainLayout"
import Enquiries from "./pages/Enquiries";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Placelist from "./pages/Placelist";
import Categorylist from "./pages/Categorylist";
import Colorlist from "./pages/Colorlist";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="list-color" element={<Colorlist />} />
          <Route path="list-category" element={<Categorylist />} />
          <Route path="list-place" element={<Placelist />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
