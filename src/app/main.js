import { initializeSpotify } from "../api/auth.js";
import { renderHome } from "../js/ui/homeView.js";
import { searchQuery } from "../js/ui/searchView.js";
import { renderSearch } from "../js/ui/searchView.js";
import { showView } from "../js/ui/viewManager.js";

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
