/** @returns {CardModel} */
export function playlistToCard(playlist) {
    return {
        id: playlist.id,

        title: playlist.name,

        subtitle: playlist.owner.display_name,

        image: playlist.images[0]?.url,

        type: "playlist"
    };
}