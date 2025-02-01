import Home from "./Component/Meals/Meals";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Ingerediant from "./Component/Ingerediant/Ingerediant";
import Area from "./Component/Area/Area";
import NotFound from "./Component/NotFound/NotFound";
import Meals from "./Component/Meals/Meals";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Meals />,
        },
        {
          path: "ingrediant",
          element: <Ingerediant />,
        },
        {
          path: "area",
          element: <Area />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
