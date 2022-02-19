import { Link, NavLink } from "react-router-dom";

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
    <div>
      {categoryList.map((cat) => {
        return (
          <NavLink
            key={cat.name}
            to={cat.name === "all" ? "/news" : `/news/${cat.name}`}
          >
            {cat.name}
          </NavLink>
        );
      })}
      <Link to="/">Home</Link>
      <Link to="/news">Back</Link>
    </div>
  );
};

export default Categories;
