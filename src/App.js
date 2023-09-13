import { CssBaseline } from "@mui/material";
import Providers from "./contexts/Providers";
import Topbar from "./components/Topbar";
import { useState } from "react";
import SideNav from "./components/sideNav/SideNav";

function App() {

  const [isSideBar, setIsSidebar] = useState(true);

  return (
    <Providers>
      <CssBaseline/>
      <div className="app">
        <SideNav />
       <main className="content">
        <Topbar />
       </main>
      </div>
    </Providers>
  );
}

export default App;
