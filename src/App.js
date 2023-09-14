import { CssBaseline } from "@mui/material";
import Providers from "./contexts/Providers";
import Topbar from "./components/Topbar";
import SideNav from "./components/sideNav/SideNav";

function App() {

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
