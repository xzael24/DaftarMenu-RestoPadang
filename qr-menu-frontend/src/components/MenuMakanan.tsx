interface MenuItemProps {
  nama: string;
  harga: number;
  gambar: string;
  tersedia: boolean;
  kategori?: string;
}

export default function MenuMakanan({ nama, harga, gambar, tersedia, kategori }: MenuItemProps) {
  return (
    <div className="menu-item bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <div className="menu-item-image-container relative">
        <img 
          src={gambar} 
          alt={nama} 
          className="menu-item-image w-full h-48 object-cover sm:h-40"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder-food.jpg';
          }}
        />
        {kategori && (
          <span className="category-tag absolute top-2 right-2 bg-primary text-white px-2 py-1 text-xs rounded">
            {kategori}
          </span>
        )}
      </div>
      <div className="menu-item-content p-4">
        <div className="menu-item-header flex justify-between items-center">
          <h3 className="menu-item-name text-lg font-semibold">{nama}</h3>
          <p className="menu-item-price text-primary font-bold">Rp {harga.toLocaleString("id-ID")}</p>
        </div>
        <div className={`menu-item-availability mt-2 text-sm font-medium ${tersedia ? 'text-green-500' : 'text-red-500'}`}>
          {tersedia ? '✔ Tersedia' : '✖ Habis'}
        </div>
      </div>
    </div>
  );
}
