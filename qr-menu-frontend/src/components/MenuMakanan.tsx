interface MenuItemProps {
  nama: string;
  harga: number;
  gambar: string;
  tersedia: boolean;
  kategori?: string;
}

export default function MenuMakanan({ nama, harga, gambar, tersedia, kategori }: MenuItemProps) {
  return (
    <div className="menu-item">
      <div className="menu-item-image-container">
        <img 
          src={gambar} 
          alt={nama} 
          className="menu-item-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder-food.jpg';
          }}
        />
        {kategori && (
          <span className="category-tag">
            {kategori}
          </span>
        )}
      </div>
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{nama}</h3>
          <p className="menu-item-price">Rp {harga.toLocaleString("id-ID")}</p>
        </div>
        <div className={`menu-item-availability ${tersedia ? 'available' : 'unavailable'}`}>
          {tersedia ? '✔ Tersedia' : '✖ Habis'}
        </div>
      </div>
    </div>
  );
}
