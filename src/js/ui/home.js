import {getPlaylists, getRecentlyPlayed } from '../spotify/api.js'
import { renderCard } from '../models/cardMapper'

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
        const card = renderCard(
        playlist.title,
        playlist.image,
        playlist.subtitle,
        playlist.type
        );
        playlistContainer.append(card);
    }
}

async function cargarPlaylistsRecientes() {
    //playlists del usuario
    const playlistSection = document.getElementById("recentSection");
    const playlistContainer = playlistSection.querySelector(".card-container");
    const playlists = await getRecentlyPlayed();

    playlistContainer.innerHTML = "";
    for(const playlist of playlists) {
        const card = renderCard(
        playlist.title,
        playlist.image,
        playlist.subtitle,
        playlist.type
        );
        playlistContainer.append(card);
    }
}


