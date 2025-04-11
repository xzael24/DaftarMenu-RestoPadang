import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDataMenu } from './services/menuService';
import MenuMakanan from './components/MenuMakanan';
import AdminPanel from './pages/AdminPanel';
import './App.css';

function HomePage() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { daftarMenu, sedangMemuat, pesanError } = useDataMenu();

  if (sedangMemuat) return <div className="loading">Memuat menu...</div>;
  if (pesanError) return <div className="error">Error: {pesanError}</div>;

  return (
    <div className="menu-container">
      <header className="menu-header">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="menu-title">Rumah Makan Padang Family</h1>
            <h2>📔Daftar Menu</h2>
          </div>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <div className="menu-grid">
        {daftarMenu.map((item) => (
          <MenuMakanan
            key={item.id}
            nama={item.nama}
            harga={item.harga}
            gambar={item.gambar}
            tersedia={item.tersedia}
            kategori={item.kategori}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
