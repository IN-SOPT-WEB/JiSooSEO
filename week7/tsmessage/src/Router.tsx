import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessageContainer from './pages/MessageContainer';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MessageContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}