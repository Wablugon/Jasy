/** @returns {CardModel} */
export function trackToCard(track) {
    return {
        id: track.id,

        title: track.name,

        subtitle: track.artists
            .map(artist => artist.name)
            .join(", "),

        image: track.album.images[0]?.url,

        type: "track"
    };
}