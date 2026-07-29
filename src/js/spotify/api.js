import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { getSdk } from "./auth.js";

export {
    search,
    getProfile,
    getLikedSongs,
    getPlaylists,
    getRecentlyPlayed
}
/**
 * The query param should be '(String, String[type])'
 * ("Daft Punk", ["artist", "track"])
 * @param {String} query 
 * @returns JSON Object
 */
async function search(query) {
    /** @type {SpotifyApi} */
    const api = getSdk();
    const search = await api.search(query);
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
    return response.items.map(item => item.track);
}

async function getTopTracks() {
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