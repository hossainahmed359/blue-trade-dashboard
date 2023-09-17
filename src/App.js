import { CssBaseline } from "@mui/material";
import Providers from "./contexts/Providers";
import {  useRoutes } from "react-router-dom";
import routesMeta from "./configs/meta/routesMeta";

function App() {

  const content = useRoutes(routesMeta);

  return (
    <Providers>
      <CssBaseline />
      {content}
    </Providers>
  );
}

export default App;
