import { Routes, Route } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import AccountPage from "./layout/AccountPage";
import HomePage from "./layout/HomePage";
import LoginPage from "./layout/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </>
  );
}

export default App;
