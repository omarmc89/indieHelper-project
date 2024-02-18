export async function getServerSideProps(context) {
  let user = null;
  try {
    // Obtener la información del usuario durante la renderización en el servidor
    const userData = await auth(); // Suponiendo que esta función devuelve la información del usuario
    user = userData;
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  // Pasar la información del usuario como prop a la página
  return {
    props: {
      user,
    },
  };
}