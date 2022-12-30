import { Outlet, Link, useLocation } from "react-router-dom";

/* Outlet sirve para indicar e inyectar los componentes HIJOS DE LAYOUT */
const Layout = () => {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-600 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM-CLIENTES
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === "/" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-500`}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`${
              location.pathname === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-500`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
          {/* Otra manera es con NavLink asi pero no funciona siempre al 100% <NavLink className={({isActive)} => isActive? 'text-white': 'text-blue' ><NavLink> */}
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
