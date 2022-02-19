import { useParams } from "react-router";
import Categories from "../Category";
import NewsList from "../News";

const NewsContainer = () => {
  const { category } = useParams();
  const categorySelected = category || "all";

  return (
    <div>
      <Categories />
      <NewsList category={categorySelected} />
    </div>
  );
};

export default NewsContainer;
