import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {
  const { nombre, empresa, email, telefono, id } = cliente;
  const navigate = useNavigate();
  /* Podemos usar un margin top abreviados para todos los hijos "space-y-2  o mt-2 " */
  return (
    <>
      <tr className="border-b">
        <td className="p-6">
          <p className="text-2xl text-gray-800">{nombre}</p>
          <p className="mt-2">{empresa}</p>
        </td>
        <td className="p-6">
          <p className="text-gray-600 ">
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {email}
          </p>
          <p className="text-gray-600 ">
            <span className="text-gray-800 uppercase font-bold">
              Telefono:{" "}
            </span>
            {telefono}
          </p>
        </td>

        <td className="p-6 flex gap-3">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
            onClick={() => navigate(`/clientes/${id}/editar`)}
          >
            Editar
          </button>
          <button
            type="button"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};

export default Cliente;
