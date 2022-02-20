import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigatorWrapper = styled.div`
  margin-bottom: 10px;
  button {
    font-size: 1rem;
    font-family: "Patua One", cursive;
    margin: 0.1rem;
    background: #f0e6fa;
  }
`;

const Navigator = () => {
  return (
    <NavigatorWrapper>
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/todo">
        <button>TODO</button>
      </Link>
      <Link to="/news">
        <button>NEWS</button>
      </Link>
    </NavigatorWrapper>
  );
};

export default Navigator;
