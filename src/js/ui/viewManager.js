import { loadArtist } from "./artistView";
import { loadAlbum } from "./albumView";

export async function showView(viewId) {
  hideAllViews();
  const view = document.getElementById(viewId);
  if (!view) {
    throw new Error(`View ${viewId} inexistente`);
  }
  view.hidden = false;
}

function hideAllViews() {
  const views = document.querySelectorAll(".view");

  for (const view of views) {
    view.hidden = true;
  }
}

export async function navigate(cardModel) {
  switch (cardModel.entityType) {
    case "artist":
      await navigateToArtist(cardModel.id);
      break;

    case "album":
      await navigateToAlbum(cardModel.id);
      break;

    case "playlist":
      await navigateToPlaylist(cardModel.id);
      break;
  }
}

function navigateToArtist(id) {
  showView("artistView");

  loadArtist(id);
}

function navigateToAlbum(id) {
  showView("albumView");

  loadAlbum(id);
}
