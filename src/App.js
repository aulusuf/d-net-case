import { Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import "./main.css";
import MainLayout from "./pages/MainLayout";
// import Login from "./pages/Login";
// import ForgetPass from "./pages/ForgetPass";
// import Otp from "./pages/Otp";
// import NewPass from "./pages/NewPass";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route path="login" element={<Login />} />
          <Route path="forget" element={<ForgetPass />} />
          <Route path="otp" element={<Otp />} />
          <Route path="newpass" element={<NewPass />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
