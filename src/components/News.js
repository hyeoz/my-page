import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  margin: 0 10%;
  padding: 3% 5%;
  border: solid 1px white;
  background-color: rgba(255, 255, 255, 0.3);
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div>
      {urlToImage && (
        <div>
          <a href={url} target="_blank" rel="noreferrer noopener">
            <img src={urlToImage} alt="thumbnail" style={{ width: "40rem" }} />
          </a>
        </div>
      )}
      <div>
        <h2>
          <a href={url} target="_blank" rel="noreferrer noopener">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const NewsList = ({ category }) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=20f4b285109346d8b4cea31bb0476630`
        );
        setArticles(res.data.articles);
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!articles) {
    return <h1>No Articles Here!</h1>;
  }

  return (
    <ItemWrapper>
      {articles.map((article) => {
        return (
          <div
            style={{
              marginBottom: "30px",
              borderBottom: "solid 1px grey",
            }}
          >
            <NewsItem key={article.url} article={article} />
          </div>
        );
      })}
    </ItemWrapper>
  );
};

export default NewsList;
