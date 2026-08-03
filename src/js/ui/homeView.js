import {getPlaylists, getRecentlyPlayed } from '../spotify/api.js'
import { playlistToCard } from '../mappers/playlistMapper.js'
import { trackToCard } from '../mappers/trackMapper.js';
import { renderSection } from './section.js';

export async function cargarHome() {

    const playlists = await getPlaylists();
    const recentTracks = await getRecentlyPlayed();

    renderSection(
    "playlistsSection",
    "Tus playlists",
    playlists,
    playlistToCard
    );

    renderSection(
    "recentSection",
    "Canciones Recientes",
    recentTracks,
    trackToCard
    );
}

/* async function cargarPlaylists() {
    //playlists del usuario
    const playlistSection = document.getElementById("playlistsSection");
    const playlistContainer = playlistSection.querySelector(".card-container");
    const playlists = await getPlaylists();

    playlistContainer.innerHTML = "";
    for(const playlist of playlists) {
        const cardModel = playlistToCard(playlist);
        const card = renderCard(cardModel);
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
        const cardModel = trackToCard(rTrack);
        const card = renderCard(cardModel);
        playlistContainer.append(card);
    }
} */