import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

interface MenuMakanan {
  id: string;
  nama: string;
  harga: number;
  gambar: string;
  tersedia: boolean;
  kategori?: string;
}

export const useDataMenu = () => {
  const [daftarMenu, setDaftarMenu] = useState<MenuMakanan[]>([]);
  const [sedangMemuat, setSedangMemuat] = useState(true);
  const [pesanError, setPesanError] = useState<string | null>(null);

  useEffect(() => {
    const ambilDataMenu = async () => {
      try {
        const menuCollection = collection(db, 'menu');
        const menuSnapshot = await getDocs(menuCollection);
        const menuList = menuSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MenuMakanan[];
        
        setDaftarMenu(menuList);
      } catch (err) {
        setPesanError(err instanceof Error ? err.message : 'Terjadi kesalahan saat mengambil data');
      } finally {
        setSedangMemuat(false);
      }
    };

    ambilDataMenu();
  }, []);

  return { daftarMenu, sedangMemuat, pesanError };
};
