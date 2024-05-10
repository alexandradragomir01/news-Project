import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { FavoritesContext } from "../store/Favorites/context";
import NewsCardList from "../components/NewsCardList";
import {useLocalStorage} from "../utils/hooks/useLocalStorage";

function Favorites() {
  // Extragem din state-ul global produsele favorite
  const { favoritesState } = useContext(FavoritesContext);
  const { news } = favoritesState;

  const [localStorageState, setLocalStorageState] = useLocalStorage(
    "favorites",
    favoritesState,
  );
  
  useEffect(() => {
    setLocalStorageState(favoritesState);
  }, [favoritesState, setLocalStorageState]);



  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">Your favourites news.</h1>
        {/* Afisam produsele favorite pe ecran. */}
        {news.length === 0 ? (
          <p>Currently you don't have any favorite news.</p>
        ) : (
          <NewsCardList newsList={news} />
        )}
      </Container>
    </Layout>
  );
}

export default Favorites;
