import { navigate } from "../ui/viewManager";

/**
 * @param {CardModel} cardModel
 */
export function renderCard(cardModel) {
  const card = document.createElement("div");
  card.className = "card";
  card.addEventListener("click", () => {
    navigate(cardModel);
  });
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

export function renderTrackRow(trackModel, index) {
  const row = document.createElement("div");
  row.className = "track-row";

  row.innerHTML = `
        <span class="track-number">${index + 1}</span>

        <span class="track-title">${trackModel.title}</span>

        <span class="track-duration">${trackModel.duration}</span>

        <button class="track-play">▶</button>
    `;

  const playButton = row.querySelector(".track-play");

  playButton.addEventListener("click", () => {
    console.log(trackModel.id);
    // play(trackModel.id);
  });

  return row;
}

function msToMinutes(ms) {
  return Math.floor(ms / 60000);
}

function msToSeconds(ms) {
  return ((ms % 60000) / 1000).toFixed(0);
}
