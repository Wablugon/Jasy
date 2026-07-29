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
    const liked = await api.currentUser.tracks.savedTracks();
    return liked;
}

async function getPlaylists() {
    /** @type {SpotifyApi} */
    const api = getSdk();

    const response = await api.currentUser.playlists.playlists();

    return response.items.map(p => ({
        id: p.id,
        title: p.name,
        image: p.images[0]?.url,
        subtitle: p.owner.display_name,
        type: "Playlist"
    }));
}

async function getRecentlyPlayed() {
    /** @type {SpotifyApi} */
    const api = getSdk();

    const response = await api.player.getRecentlyPlayedTracks();

    return response.items.map(item => ({
        id: item.track.id,
        title: item.track.name,
        image: item.track.album.images[0]?.url,
        subtitle: item.track.artists.map(a => a.name).join(", "),
        type: "Track"
    }));
}

async function getTopTracks() {
    /** @type {SpotifyApi} */
    const api = getSdk();
    return await api.currentUser.topItems("tracks");
}

async function getTopArtists() {
    /** @type {SpotifyApi} */
    const api = getSdk();
    return await api.currentUser.topItems("artists");
}