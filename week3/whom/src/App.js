import Header from "./components/Header";
import Score from "./components/Score";
import Main from "./components/Main";
import Again from "./components/Again";
import styled from "styled-components";

const App = () => {
  return (
    <Dom>
      <Header />
      <Score />
      <Main />
      <Again />
    </Dom>
  );
};

export default App;

const Dom = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
