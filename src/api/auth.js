import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { SCOPES } from "./scopes";
import { store } from "../state/store.js";

const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const URL_REDIRECT = import.meta.env.VITE_REDIRECT_URI;

export { initializeSpotify, getSdk, isInitialized };

/** @type {SpotifyApi | null} */
let api = null;

async function initializeSpotify() {
  if (!api) {
    api = SpotifyApi.withUserAuthorization(
      SPOTIFY_CLIENT_ID,
      URL_REDIRECT,
      SCOPES,
    );
  }
  const userProfile = await api.currentUser.profile();
  store.setState({ user: userProfile });
  return api;
}

/**
 * @returns {SpotifyApi}
 */
function getSdk() {
  if (!api) {
    throw new Error("Spotify SDK not initialized.");
  }
  return api;
}

function isInitialized() {
  return api != null;
}
