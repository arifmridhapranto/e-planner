import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { Events } from "./pages/Events";
import { Navigation } from "./components/utilities/Navigation/Navigation";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
