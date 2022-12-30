export async function obtenerClientes() {
  /* el metodo get es por defecto en FETCH por eso no se coloca */
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
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
