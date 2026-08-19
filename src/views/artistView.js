import {
  getArtist,
  getTopAlbums,
  getAppearsOn,
  getSingles,
  getTopTracks,
} from "../api/spotify.js";
import { renderSection } from "../mappers/html/section.js";
import { artistToCard } from "../mappers/spotify/artistMapper.js";
import { trackToCard } from "../mappers/spotify/trackMapper.js";
import { albumToCard } from "../mappers/spotify/albumMapper.js";
import { trackToRow } from "../mappers/html/trackRowMapper.js";
import { renderCard, renderTrackRow } from "../mappers/html/cardMapper.js";

async function loadArtistProfile(id) {
  const artistData = await getArtist(id);
  return artistData;
}

async function loadArtistTopAlbums(id) {
  const albums = await getTopAlbums(id);
  return albums;
}

async function loadArtistAO(id) {
  const ao = await getAppearsOn(id);
  return ao;
}

async function loadArtistSingles(id) {
  const singles = await getSingles(id);
  return singles;
}

async function loadTopTracks(id) {
  const topTracks = await getTopTracks(id);
  return topTracks;
}

export function renderArtist(artist, topTracks, albums) {
  const artistCard = artistToCard(artist);
  // ---------- HEADER ----------

  document.getElementById("artistImage").src =
    artistCard.image ?? "/images/default-cover.png";

  document.getElementById("artistName").textContent = artist.title;

  document.getElementById("artistFollowers").textContent =
    artist.followers.total;

  document.getElementById("artistGenres").textContent = artist.genres.length
    ? artistCard.genres.join(", ")
    : "Sin géneros";

  // ---------- TOP TRACKS ----------
  const trackContainer = document.querySelector("#artistTopTracks .track-list");

  trackContainer.innerHTML = "";

  for (let i = 0; i < topTracks.length; i++) {
    const model = trackToRow(topTracks[i]);
    const row = renderTrackRow(model, i);
    trackContainer.append(row);
  }
  // ---------- ALBUMS ----------

  const albumContainer = document.querySelector(
    "#artistAlbums .card-container",
  );

  albumContainer.innerHTML = "";

  for (const album of albums) {
    const model = albumToCard(album);

    const card = renderCard(model);

    albumContainer.append(card);
  }
}

export async function loadArtist(artistId) {
  const artistData = await loadArtistProfile(artistId);
  const topTracks = await loadTopTracks(artistId);
  const albums = await loadArtistTopAlbums(artistId);

  await renderArtist(artistData, topTracks, albums);
}
