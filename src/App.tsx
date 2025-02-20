import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Setting from "./components/Setting";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/details/:id" element={<ArticleDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
