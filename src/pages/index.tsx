import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Nav from "../components/Nav";
import AboutPage from "./AboutPage";
import NotePage from "./NotePage";

const Pages = () => {
    return (
    <div className="bg-primary-content">

        <Nav/>
        <div >
        <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/notes" element={<NotePage />} /> 
              </Routes>
              
          </BrowserRouter>
        </div>
       
        
      </div>

    );
};

export default Pages;
