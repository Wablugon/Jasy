import {getPlaylists, getRecentlyPlayed } from '../spotify/api.js'
import { renderCard } from '../mappers/cardMapper.js'
import { playlistToCard } from '../mappers/playlistMapper.js'
import { trackToCard } from '../mappers/trackMapper.js';
/**
 * Necesito pedir: recientes, recomendados y las playlists del usuario
 */
export async function cargarHome() {

    await cargarPlaylists();
    await cargarPlaylistsRecientes();

}

async function cargarPlaylists() {
    //playlists del usuario
    const playlistSection = document.getElementById("playlistsSection");
    const playlistContainer = playlistSection.querySelector(".card-container");
    const playlists = await getPlaylists();

    playlistContainer.innerHTML = "";
    for(const playlist of playlists) {
        const card = playlistToCard(playlist);
        playlistContainer.append(card);
    }
}

async function cargarPlaylistsRecientes() {
    //playlists del usuario
    const playlistSection = document.getElementById("recentSection");
    const playlistContainer = playlistSection.querySelector(".card-container");
    const recentTracks = await getRecentlyPlayed();

    playlistContainer.innerHTML = "";
    for(const rTrack of recentTracks) {
        const card = trackToCard(rTrack)
        playlistContainer.append(card);
    }
}


