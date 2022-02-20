import { useParams } from "react-router";
import styled from "styled-components";
import Categories from "../Category";
import Navigator from "../Navigator";
import NewsList from "../News";

const NewsWrapper = styled.div`
  font-family: "Gowun Dodum", sans-serif;
  text-align: center;
`;

const NewsContainer = () => {
  const { category } = useParams();
  const categorySelected = category || "all";

  return (
    <NewsWrapper>
      <Navigator />
      <Categories />
      <NewsList category={categorySelected} />
    </NewsWrapper>
  );
};

export default NewsContainer;
