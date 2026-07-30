/** @returns {CardModel} */
export function artistToCard(artist) {
    return {
        id: artist.id,

        title: artist.name,

        subtitle: "",

        image: artist.images[0]?.url,

        type: "artist"
    };
}