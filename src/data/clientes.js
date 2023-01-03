export async function obtenerClientes() {
  /* el metodo get es por defecto en FETCH por eso no se coloca */
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();

  return resultado;
}

export async function obtenerCliente(id) {
  /* el metodo get es por defecto en FETCH por eso no se coloca */
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const resultado = await respuesta.json();

  return resultado;
}

export async function agregarCliente(datos) {
  /* Aqui se debe especificar el metodo POST  */
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

/* Se requiere el id y los datos del usuario para actualizarlo */
export async function actualizarCliente(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

/* usamos el ID del cliente para eliminarlo a traves de params que captura a traves d ela url el id */
/* no contiene body ni headers ya que no se ESTA ENVIANDO INFORMACION.. */
export async function eliminarCliente(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE"
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}
