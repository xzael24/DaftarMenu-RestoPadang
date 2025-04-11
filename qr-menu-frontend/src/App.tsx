import { useDataMenu } from './services/menuService';
import MenuMakanan from './components/MenuMakanan';
import './App.css';

function App() {
  const { daftarMenu, sedangMemuat, pesanError } = useDataMenu();

  if (sedangMemuat) {
    return <div className="loading">Memuat menu...</div>;
  }

  if (pesanError) {
    return <div className="error">Error: {pesanError}</div>;
  }

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1 className="menu-title">Rumah Makan Padang Family</h1>
        <h2>📔Daftar Menu</h2> 
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

export default App;
