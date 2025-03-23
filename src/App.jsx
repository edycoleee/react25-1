//src/App.jsx
import React, { useState } from 'react';
import SiswaForm from './components/SiswaForm';
import SiswaList from './components/SiswaList';
import { nanoid } from 'nanoid';

let tbSiswa = [
  {
    id: 1,
    siswaName: 'Budi',
    siswaAlamat: 'Jakarta',
  },
  {
    id: 2,
    siswaName: 'Andi',
    siswaAlamat: 'Bandung',
  },
  {
    id: 3,
    siswaName: 'Cindy',
    siswaAlamat: 'Surabaya',
  },
];

const App = () => {
  // const [tbSiswa, setTbSiswa] = useState([]);
  // const [editSiswa, setEditSiswa] = useState(null);

  // const addSiswa = (siswa) => {
  //   siswa.id = nanoid();
  //   setTbSiswa([...tbSiswa, siswa]);
  // };

  // const updateSiswa = (updatedSiswa) => {
  //   setTbSiswa(tbSiswa.map((siswa) => (siswa.id === updatedSiswa.id ? updatedSiswa : siswa)));
  // };

  // const deleteSiswa = (id) => {
  //   setTbSiswa(tbSiswa.filter((siswa) => siswa.id !== id));
  // };

  const deleteSiswa = (id) => {
    console.log("DELETE ID : ", id);
  };
  const setEditSiswa = (siswa) => {
    console.log("EDIT SISWA :", siswa);
  }

  return (
    <div>
      <h1>Aplikasi Siswa</h1>
      {/* <SiswaForm addSiswa={addSiswa} editSiswa={editSiswa} updateSiswa={updateSiswa} setEditSiswa={setEditSiswa} /> */}
      <SiswaList tbSiswa={tbSiswa} setEditSiswa={setEditSiswa} deleteSiswa={deleteSiswa} />
    </div>
  );
};

export default App;