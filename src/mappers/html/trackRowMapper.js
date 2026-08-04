/** @returns {RowModel} */
export function trackToRow(track) {
  return {
    id: track.id,

    name: track.name,

    image: track.album.images[0]?.url,

    artists: track.artists.map((artist) => artist.name).join(", "),

    duration_ms: track.duration_ms,

    uri: track.uri,

    album: track.album.name,

    type: "track",
  };
}
