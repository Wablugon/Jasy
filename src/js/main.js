import { initializeSpotify } from "./spotify/auth.js";
import { cargarHome } from "./ui/home";
import { searchQuery } from "./ui/search.js";
import { renderSearch } from "./ui/search.js";

document.getElementById("test").addEventListener("click", principal);
document.getElementById("searchButton").addEventListener("click", search);
async function iniciar() {

    initializeSpotify();
    
}

async function principal() {
    iniciar();
    cargarHome();
}

async function search() {
    iniciar();
    const input = document.getElementById("searchInput").innerText;
    //validacion input vacio

    //.
    const { albums, tracks, artists } = searchQuery(input);
    await renderSearch(albums, tracks, artists);
}