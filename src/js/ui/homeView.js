import { getPlaylists, getRecentlyPlayed } from "../spotify/api.js";
import { playlistToCard } from "../mappers/playlistMapper.js";
import { trackToCard } from "../mappers/trackMapper.js";
import { renderSection } from "./section.js";

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
