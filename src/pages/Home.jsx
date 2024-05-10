import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  // Generam endpoint-urile pentru categoriile de stiri.
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 6);
  const worldNewsEndpoint = getNewsCategoriesEndpoint("world", 1, 6);
  // Fetch-uim datele de la The Guardian.
  let technologyData = useFetch(technologyNewsEndpoint);
  let footballData = useFetch(footballNewsEndpoint);
  let worldData = useFetch(worldNewsEndpoint);
  // Adaptam datele de la server la datele necesare componentelor de react.
  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedFootballData = getNewsList(footballData);
  const adaptedWorldData = getNewsList(worldData)

  return (
    <Layout>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          {/* Afisam stirile despre technologie. */}
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
          Visit the{" "}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            {" "}section to see all the news.
          </p>
        </Container>
      </section>
      <section className="football my-5">
        <Container>
          <h1 className="mb-5 pt-3">Football</h1>
          {/* Afisam stirile despre fotbal. */}
          <NewsCardList newsList={adaptedFootballData} />
          <p>
          Visit the{" "}
            <Link to="/category/football" className="text-secondary">
              Football
            </Link>
            {" "}section to see all the news.
          </p>
        </Container>
      </section>
  
      <section className="science my-5">
        <Container>
          <h1 className="mb-5 pt-3">World news</h1>
          {/* Afisam stirile despre stiinta. */}
          <NewsCardList newsList={adaptedWorldData} />
          <p>
          Visit the{" "}
            <Link to="/category/world" className="text-secondary">
              World news
            </Link>
            {" "}section to see all the news.
          </p>
        </Container>
      </section>

      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>
          Would you like to save your favorite news articles to read them later?
          </p>
          <p>
          Within each news article, you'll find a button that allows you to add the article to your favorites.
          </p>
          <p className="pb-3">
            Visit the{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>
            {" "}section to see the added news articles.
          </p>
        </Container>
      </section>
      
    </Layout>
  );
}

export default Home;
