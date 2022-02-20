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
    <div>
      <Navigator />
      <NewsWrapper>
        <Categories />
        <NewsList category={categorySelected} />
      </NewsWrapper>
    </div>
  );
};

export default NewsContainer;
