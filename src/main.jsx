import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import "./index.css";
import EditarCliente,{action as editarClienteAction, loader as editarClienteLoader} from "./pages/EditarCliente";
import Index, { loader as clientesLoader } from "./pages/Index";
import NuevoCliente, {
  action as nuevoClienteAction,
} from "./pages/NuevoCliente";

import {action as eliminarClienteAction} from './components/Cliente'


/* Children hijos del componente Layout que es igual para ttodos */
/* Con el LOADER TRAEMOS LOS DATOS O INFORMACION Y CON ACTION ejecutamos los cambios */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement:<ErrorPage/>,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement:<ErrorPage/>
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader:editarClienteLoader,
        action:editarClienteAction,
        errorElement:<ErrorPage/>
       
      },
      {
        path:'/clientes/:clienteId/eliminar',
        action:eliminarClienteAction,
      }
    ],
  },
]);

/* Reemplazamos la App por RouterProvider que sera la base y le pasamos la variable de router  */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
