import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CategoryWrapper = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
  .cat {
    margin-right: 5px;
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
            {cat.name}
          </NavLink>
        );
      })}
    </CategoryWrapper>
  );
};

export default Categories;
