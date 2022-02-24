import { useParams } from "react-router";
import styled from "styled-components";
import Categories from "../Category";
import Navigator from "../Navigator";
import NewsList from "../News";

const Wrapper = styled.div`
  font-family: "Gowun Dodum", sans-serif;
  text-align: center;
  /* background: ; */
`;

const NewsWrapper = styled.div`
  display: inline-block;
  /* border: solid 1px white; */
`;

const NewsContainer = () => {
  const { category } = useParams();
  const categorySelected = category || "all";

  return (
    <div style={{ backgroundColor: "#bcbcbc", paddingTop: "10px" }}>
      <Wrapper>
        <Navigator />
        <NewsWrapper>
          <div>
            <Categories />
          </div>
          <NewsList key={category} category={categorySelected} />
        </NewsWrapper>
      </Wrapper>
    </div>
  );
};

export default NewsContainer;
