import { initializeSpotify } from "./spotify/auth.js";
import { renderHome } from "./ui/homeView.js";
import { searchQuery } from "./ui/searchView.js";
import { renderSearch } from "./ui/searchView.js";
import { showView } from "./ui/viewManager.js";

window.addEventListener("DOMContentLoaded", iniciar);
document.getElementById("searchButton").addEventListener("click", search);

async function iniciar() {
  initializeSpotify();
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
