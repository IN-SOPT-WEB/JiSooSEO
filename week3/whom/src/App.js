import Header from "./components/header/Header";
import Score from "./components/content/Score";
import Main from "./components/content/Main";
import Again from "./components/content/Again";
import styled from "styled-components";

const App = () => {
  return (
    <BodyDom>
      <Dom>
        <Header />
        {/* <Score /> */}
        <Main />
        {/* <Again /> */}
      </Dom>
    </BodyDom>
  );
};

export default App;

const Dom = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 500px;
`;
const BodyDom = styled.section`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
