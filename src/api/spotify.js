/**
 * api.js debe devolver objetos UTILES, no sus envoltorios -> retorna tracks, playlists, artistas
 */
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { getSdk } from "./auth.js";
import { DEFAULT_MARKET } from "../config/constants.js";

export {
  search,
  getProfile,
  getLikedSongs,
  getPlaylists,
  getRecentlyPlayed,
  getArtist,
  getTopAlbums,
  getSingles,
  getAppearsOn,
  getTopTracks,
};
/**
 * The query param should be '(String, String[type])'
 * ("Daft Punk", ["artist", "track"])
 * @param {String} query
 * @returns JSON Object
 */
async function search(query, types = ["track", "album", "artist"]) {
  /** @type {SpotifyApi} */
  const api = getSdk();
  const search = await api.search(query, types, "AR", 10, 0);
  return search;
}

async function getProfile() {
  /** @type {SpotifyApi} */
  const api = getSdk();
  const user = await api.currentUser.profile();
  return user;
}

async function getLikedSongs() {
  /** @type {SpotifyApi} */
  const api = getSdk();
  const response = await api.currentUser.tracks.savedTracks();
  return response;
}

async function getPlaylists() {
  /** @type {SpotifyApi} */
  const api = getSdk();

  const response = await api.currentUser.playlists.playlists();
  return response.items;
}

async function getRecentlyPlayed() {
  /** @type {SpotifyApi} */
  const api = getSdk();

  const response = await api.player.getRecentlyPlayedTracks();
  return response.items.map((item) => item.track);
}

async function getUserTopTracks() {
  /** @type {SpotifyApi} */
  const api = getSdk();
  const response = await api.currentUser.topItems("tracks");
  return response;
}

async function getTopArtists() {
  /** @type {SpotifyApi} */
  const api = getSdk();
  const response = await api.currentUser.topItems("artists");
  return response;
}

async function getArtist(id) {
  /** @type {SpotifyApi} */
  const api = getSdk();
  const response = await api.artists.get(id);
  return response;
}

async function getTopTracks(artistID, market = DEFAULT_MARKET) {
  /** @type {SpotifyApi} */
  const api = getSdk();
  const response = await api.artists.topTracks(artistID, market);
  return response.tracks;
}

//array de <album>
async function getTopAlbums(artistID, market = DEFAULT_MARKET) {
  /** @type {SpotifyApi} */
  const api = getSdk();
  //aclaracion del metodo, devuelve 10 albumes o menos, si hay mas albumes hay que cambiar el offset de 0
  //a 10 (y asi sucesivamente)
  const response = await api.artists.albums(artistID, "album", market, 10, 0);
  return response.items;
}

async function getSingles(artistID, market = DEFAULT_MARKET) {
  /** @type {SpotifyApi} */
  //misma idea que el de top albums, pero limitado a 5
  const api = getSdk();
  const response = await api.artists.albums(artistID, "single", market, 5, 0);
  return response.items;
}

async function getAppearsOn(artistID, market = DEFAULT_MARKET) {
  /** @type {SpotifyApi} */
  //misma idea que el de top albums, pero limitado a 5
  const api = getSdk();
  const response = await api.artists.albums(
    artistID,
    "appears_on",
    market,
    5,
    0,
  );
  return response.items;
}
