import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Detail from "./components/Detail";
import styled from "styled-components";

const App = () => {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path="/search" element={<Search />}>
            {/* <Route path=":userId" element={<Detail />} /> */}
          </Route>
        </Routes>
      </Body>
    </BrowserRouter>
  );
};

export default App;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
