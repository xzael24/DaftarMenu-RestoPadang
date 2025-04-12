import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import './AdminPanel.css';

interface MenuItem {
  id: string;
  nama: string;
  gambar: string;
  harga: number;
  tersedia: boolean;
  kategori: string;
}

const AdminPanel = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const menuSnapshot = await getDocs(collection(db, 'menu'));
      const items = menuSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as MenuItem[];
      setMenuItems(items);
    };

    fetchMenu();
  }, []);

  const toggleAvailability = async (id: string, currentStatus: boolean) => {
    const itemRef = doc(db, 'menu', id);
    await updateDoc(itemRef, {
      tersedia: !currentStatus
    });

    setMenuItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, tersedia: !currentStatus } : item
      )
    );
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">📋 Admin Panel - Ketersediaan Menu</h1>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Gambar</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map(item => (
              <tr key={item.id}>
                <td><img src={item.gambar} alt={item.nama} /></td>
                <td>{item.nama}</td>
                <td>Rp {item.harga}</td>
                <td>{item.tersedia ? 'Tersedia' : 'Habis'}</td>
                <td>
                  <button
                    className="admin-button"
                    onClick={() => toggleAvailability(item.id, item.tersedia)}
                  >
                    Tandai sebagai {item.tersedia ? 'Habis' : 'Tersedia'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
  

export default AdminPanel;
