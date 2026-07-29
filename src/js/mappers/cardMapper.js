/**
 * @param {CardModel} cardModel
 */
export function renderCard(cardModel) {
    const card = document.createElement("div");
    card.className = "card";
    const image = cardModel.image ?? "/images/default-cover.png";

    card.innerHTML = `
        <img src="${image}" alt="Imagen de ${cardModel.title}" loading="lazy">
        <div class="card-info">
            <h3>${cardModel.title}</h3>
            <p>${cardModel.subtitle}</p>
        </div>
    `;

    return card;
}