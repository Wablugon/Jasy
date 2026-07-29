import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { URL_REDIRECT, SPOTIFY_CLIENT_ID } from ''
import { SCOPES } from './scopes';

export {
    initializeSpotify,
    getSdk,
    isInitialized
}

/** @type {SpotifyApi | null} */
let api = null;

function initializeSpotify () {
    if(!api) {
        api = SpotifyApi.withUserAuthorization(SPOTIFY_CLIENT_ID, "https://localhost:3000", SCOPES);
    }
    return api;
}

/**
 * @returns {SpotifyApi}
 */
function getSdk() {
    if(!api) {
        throw new Error("Spotify SDK not initialized.");
    }
    return api;
}

function isInitialized() {
    return api != null;
}