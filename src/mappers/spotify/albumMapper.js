/** @returns {CardModel} */
export function albumToCard(album) {
  return {
    id: album.id,

    title: album.name,

    subtitle: album.artists.map((artist) => artist.name).join(", "),

    image: album.images[0]?.url,

    entityType: "album",
  };
}
