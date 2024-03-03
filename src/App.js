import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";

function App() {
 


  return (
    // center this div in the middle of the page

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
