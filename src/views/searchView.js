import { search } from "../api/spotify";
import { renderSection } from "../mappers/html/section.js";
import { trackToCard } from "../mappers/spotify/trackMapper.js";
import { albumToCard } from "../mappers/spotify/albumMapper";
import { artistToCard } from "../mappers/spotify/artistMapper.js";
export { searchQuery, renderSearch };

async function searchQuery(query) {
  const result = await search(query);

  const albums = result.albums.items;
  const tracks = result.tracks.items;
  const artists = result.artists.items;

  return { albums, tracks, artists };
}

async function renderSearch(albums, tracks, artists) {
  renderSection("playlistsSection", "Artistas", artists, artistToCard);

  renderSection("recentSection", "Canciones", tracks, trackToCard);

  renderSection("recommendedSection", "Álbumes", albums, albumToCard);
}
