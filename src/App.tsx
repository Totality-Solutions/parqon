// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import HomePage from './pages/Home/Home';
import { ContactPage } from './pages/Contact/Contact';
import AboutPage from './pages/About/About';
import ApplicationsPage from './pages/Applications/Applications';
import ProductPage from './pages/Product/ProductPage';
import { ProductDetail } from './pages/Product/Sections/ProductDetail';
import Projects from './pages/Projects/Projects';
import { ProjectDetail } from './pages/Projects/Sections/ProjectDetail';
import { ScrollToTop } from './components/common/ScrollToTop';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import { PrivacyPolicy } from './components/common/PrivacyPolicy';
import { CatalogPage } from './pages/Catalog/Catalog';
import { SearchPage } from './pages/Search/SearchPage';
// import AboutPage from './pages/About/Sections/AboutPage';


function App() {
  return (
    <> {/* Use a Fragment or <div> instead of <Router> */}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        {/* One route for all product listing pages, so the page stays mounted while moving between categories */}
        <Route path="/products/:brand?/:category?/:type?" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

