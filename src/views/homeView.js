import { getPlaylists, getRecentlyPlayed } from "../api/spotify.js";
import { playlistToCard } from "../mappers/spotify/playlistMapper.js";
import { trackToCard } from "../mappers/spotify/trackMapper.js";
import { renderSection } from "../mappers/html/section.js";

export async function renderHome() {
  const playlists = await getPlaylists();
  const recentTracks = await getRecentlyPlayed();

  renderSection("playlistsSection", "Tus playlists", playlists, playlistToCard);

  renderSection(
    "recentSection",
    "Canciones Recientes",
    recentTracks,
    trackToCard,
  );
}
