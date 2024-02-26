import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AssetsCollection from "./pages/AssetsCollection.jsx";
import PerformanceMatrixCollection from "./pages/PerformanceMatrixCollection.jsx";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOption={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assetcollection" element={<AssetsCollection />} />
        <Route
          path="/performancematrixcollection"
          element={<PerformanceMatrixCollection />}
        />
      </Routes>
    </UserContextProvider>
  );
}

export default App;

// mongodb+srv://biswayan:biswayan@cluster0.sazayui.mongodb.net/
