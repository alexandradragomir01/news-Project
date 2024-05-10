// Actiunea pentru adaugarea la favorite:
export function addToFavorites(singlenews) {
  return {
    type: "ADD_TO_FAVORITES",
    payload: singlenews,
  };
}

// Actiunea pentru stergerea de la favorite.
export function removeFromFavorites(singlenewsId) {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: singlenewsId,
  };
}
