import Nav from "./components/Nav";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import DetailedInfo from "./pages/DetailedInfo";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/detailedinfo/:id' element={<DetailedInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
