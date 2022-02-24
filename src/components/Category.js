import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  margin-bottom: 20px;
  font-size: 1.3rem;
  border-top: dotted 1px white;
  border-bottom: dotted 1px white;
  display: inline-block;
  font-style: bold;

  .cat {
    margin-right: 5px;
    /* border: solid 1px black; */
    /* border-radius: 10px; */
    text-decoration: none;
    padding: 3px;
    color: #0065bf;
    &:hover {
      color: #4b0081;
    }
  }
`;

const categoryList = [
  {
    name: "all",
    text: "전체 보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = () => {
  return (
    <CategoryWrapper>
      {categoryList.map((cat) => {
        return (
          <NavLink
            key={cat.name}
            to={cat.name === "all" ? "/news" : `/news/${cat.name}`}
            className="cat"
          >
            {cat.text}
          </NavLink>
        );
      })}
    </CategoryWrapper>
  );
};

export default Categories;
