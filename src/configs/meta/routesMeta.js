import Dashboard from "../../components/dashboard/Dashboard";
import Home from "../../pages/Home";

const routesMeta = [
  {
    path: '/',
    element: (
      <Dashboard>
        <Home />
      </Dashboard>
    ),
  },
  {
    path: "*",
    element: (
      <Dashboard>
        <Home />
      </Dashboard>
    ),

  },
];


export default routesMeta;