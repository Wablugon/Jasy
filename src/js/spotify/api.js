import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { getSdk } from "./auth.js";


/**
 * The query param should be '(String, String[type])'
 * ("Daft Punk", ["artist", "track"])
 * @param {String} query 
 * @returns JSON Object
 */
function search(query) {
    /** @type {SpotifyApi} */
    const api = getSdk();
    const search = await api.search(query);
    return search;
}

function getProfile() {
    /** @type {SpotifyApi} */
    const api = getSdk();
    const user = await api.currentUser.profile();
    return user;
}

function getLikedSongs() {
    /** @type {SpotifyApi} */
    const api = getSdk();
    const liked = await api.currentUser.tracks.savedTracks();
    return liked;
}

function getPlaylists() {
    /** @type {SpotifyApi} */
    const api = getSdk();
    return await api.currentUser.playlists.playlists();
}

/**
 * function getRecentlyPlayed() {
 *      @type {SpotifyApi} 
 *      const api = getSdk();
 *       const recent = await api.currentUser.tracks
 *   }
 */

function getTopTracks() {
    /** @type {SpotifyApi} */
    const api = getSdk();
    return await api.currentUser.topItems("tracks");
}

function getTopArtists() {
    /** @type {SpotifyApi} */
    const api = getSdk();
    return await api.currentUser.topItems("artists");
}