/** @returns {CardModel} */
export function albumToCard(album) {
    return {
        id: album.id,

        title: album.name,

        subtitle: album.artists,

        image: album.images[0]?.url,

        type: "album"
    };
}