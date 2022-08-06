import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./Pages/Home";
import { Routes,Route } from 'react-router-dom';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import Blog from "./Pages/Blog";
import Navigation from "./Components/Navigation/Navigation";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer/Footer";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/events' element={<Events />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
