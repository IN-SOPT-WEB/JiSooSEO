import Header from "./Header";
import Score from "./Score";
import Main from "./Main";
import Again from "./Again";
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
