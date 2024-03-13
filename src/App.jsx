import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CatatanPemasukan from "./pages/CatatanPemasukan";
import CatatanPengeluaran from "./pages/CatatanPengeluaran";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/catatan-pemasukan" element={<CatatanPemasukan />} />
        <Route path="/catatan-pengeluaran" element={<CatatanPengeluaran />} />
      </Routes>
    </Router>
  );
};

export default App;
