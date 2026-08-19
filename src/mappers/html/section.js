import { renderCard } from "./cardMapper";

/**
 * Renderiza una sección de la página.
 *
 * @param {string} sectionId Id del <section> del HTML.
 * @param {string} title Nuevo título de la sección.
 * @param {Array} data Datos a mostrar.
 * @param {Function} mapper Función que convierte un dato en CardModel.
 */
export function renderSection(sectionId, title, data, mapper) {
  const section = document.getElementById(sectionId);

  if (!section) {
    throw new Error(`No existe la sección '${sectionId}'.`);
  }

  const titleElement = section.querySelector("h2");
  const container = section.querySelector(".card-container");

  titleElement.textContent = title;

  container.innerHTML = "";

  for (const item of data) {
    const cardModel = mapper(item);

    const card = renderCard(cardModel);

    container.append(card);
  }
}
