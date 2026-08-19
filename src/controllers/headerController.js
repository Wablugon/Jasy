import { store } from "../state/store.js";
import { renderUserHeader } from "../views/headerView.js";

export function initHeader() {
  renderUserHeader(store.getState().user);
  console.log("aca se tendria que renderizar");

  store.subscribe((state) => {
    renderUserHeader(state.user);
  });
}
