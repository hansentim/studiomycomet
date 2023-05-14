import Nav from "./components/Nav";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import BookIllustrations from "./pages/BookIllustrations";
import Mirror from "./pages/Mirror";
import ScrollToTop from "./components/ScroolToTop";

function App() {
  return (
    <div className='App'>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book-illustrations' element={<BookIllustrations />} />
        <Route path='/mirror' element={<Mirror />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
