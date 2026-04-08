// src/App.tsx
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import HomePage from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;