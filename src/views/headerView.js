export async function renderUserHeader(user) {
  const userNameEl = document.getElementById("header-username");
  const userImgEl = document.getElementById("header-avatar");

  if (!user) {
    if (userNameEl) userNameEl.textContent = "Iniciando...";
    return;
  }
  if (userNameEl) userNameEl.textContent = user.display_name;

  if (userImgEl && user.images && user.images.length > 0) {
    userImgEl.src = user.images[0].url; // la imagen del usuario
    //
    console.log("Imagen despues de .image[0].url = " + user.images[0].url);
    //
    userImgEl.alt = `Perfil de ${user.display_name}`;
  }
}
