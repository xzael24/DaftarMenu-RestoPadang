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
    <>
    <button
      onClick={toggleDarkMode}
      className="toggle-dark-mode-button"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>


      <div className="menu-container">
        <header className="menu-header text-center mb-8">
          <div className="flex flex-col items-center">
            <h1 className="menu-title wave-title text-3xl sm:text-2xl">
              {'Rumah Makan Padang Family'.split('').map((char, i) => (
                <span key={i} className={`wave-char char-${i}`}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            <h2 className="text-lg sm:text-base">📔Daftar Menu</h2>
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
    </>
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
