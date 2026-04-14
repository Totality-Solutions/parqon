// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import HomePage from './pages/Home/Home';
import { ContactPage } from './pages/Contact/Contact';
import AboutPage from './pages/About/About';
import ApplicationsPage from './pages/Applications/Applications';
// import AboutPage from './pages/About/Sections/AboutPage';

function App() {
  return (
    <> {/* Use a Fragment or <div> instead of <Router> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;