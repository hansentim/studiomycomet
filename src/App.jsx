import Nav from './components/Nav';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cv from './pages/Cv';
import Footer from './components/Footer';
import BookIllustrations from './pages/BookIllustrations';
import Mirror from './pages/Mirror';
import Ignis from './pages/Ignis';
import ScrollToTop from './components/ScroolToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className='App'>
      <Nav />
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cv' element={<Cv />} />
        <Route path='/book-illustrations' element={<BookIllustrations />} />
        <Route path='/mirror' element={<Mirror />} />
        <Route path='/ignis' element={<Ignis />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
