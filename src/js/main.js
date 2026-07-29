import { initializeSpotify } from "./spotify/auth.js";
import { cargarHome } from "./ui/home";

document.getElementById("test").addEventListener("click", iniciar);
async function iniciar() {

    initializeSpotify();

    await cargarHome();
}