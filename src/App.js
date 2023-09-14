import { CssBaseline } from "@mui/material";
import Providers from "./contexts/Providers";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return (
    <Providers>
      <CssBaseline />
        <Dashboard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<>This is is not available</>} />
          </Routes>
        </Dashboard>

    </Providers>
  );
}

export default App;
