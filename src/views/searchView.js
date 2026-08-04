import { search } from "../api/spotify";
import { renderSection } from "../js/ui/section";
import { trackToCard } from "../mappers/trackMapper";
import { albumToCard } from "../mappers/albumMapper";
import { artistToCard } from "../mappers/artistMapper";
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
