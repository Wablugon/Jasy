import { initializeSpotify } from "../api/auth.js";
import { renderHome } from "../views/homeView.js";
import { searchQuery, renderSearch } from "../views/searchView.js";
import { showView } from "../app/router.js";
import { initHeader } from "../controllers/headerController.js";

window.addEventListener("DOMContentLoaded", iniciar);
document.getElementById("searchButton").addEventListener("click", search);

async function iniciar() {
  initializeSpotify();
  initHeader();
  showView("homeView");
  await renderHome();
}

async function search() {
  const input = document.getElementById("searchInput").value.trim();

  if (!input) {
    return;
  }

  const { albums, tracks, artists } = await searchQuery(input);
  await renderSearch(albums, tracks, artists);
}
