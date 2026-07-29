
export function renderCard(title, image, artistsarray, type) {
    const card = document.createElement("div");
    card.className = "card";

    let subtitleText = "";

    if (Array.isArray(artistsarray)) {
        // Si es un track, la API de Spotify devuelve un array de objetos de artistas.
        // Extraemos el 'name' de cada uno y los unimos con una coma.
        subtitleText = artistsarray.map(artist => artist.name || artist).join(", ");
    } else if (artistsarray) {
        // Si pasaste un string directo (ej. el nombre del creador de la playlist)
        subtitleText = artistsarray;
    }

    card.innerHTML = `
        <img src="${image}" alt="Imagen de ${title}" loading="lazy">
        <div class="card-info">
            <h3>${title}</h3>
            <p>${type ? type + ' • ' : ''}${subtitleText}</p>
        </div>
    `;

    return card;
}