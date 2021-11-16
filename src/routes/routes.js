import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../layout/layout";
import BancoImagem from "../pages/BancoImagem/BancoImagem";
import HomePage from "../pages/Home/Home";

const Routes = () => {
  return useRoutes([
    {
      path: "/lsconsultoria/acervovirtual",
      element: <Layout />,
      children: [
        {
          element: <Navigate to="/lsconsultoria/acervovirtual/home" replace/>
        },
        {
          path: "/lsconsultoria/acervovirtual/home", 
          element: <HomePage/>
        },
        {
          path: "/lsconsultoria/acervovirtual/bancoimagens", 
          element: <BancoImagem/>
        },
      ],
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          element: <Navigate to="/lsconsultoria/acervovirtual"/>
        },
      ]

    }
  ])
}

export default Routes;
