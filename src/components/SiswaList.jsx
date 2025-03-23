//src/components/SiswaList.jsx
import React from 'react';

const SiswaList = ({ tbSiswa, setEditSiswa, deleteSiswa }) => {
  return (
    <div>
      <h2>Daftar Siswa</h2>
      <ul>
        {tbSiswa.map((siswa) => (
          <li key={siswa.id}>
            {siswa.siswaName} - {siswa.siswaAlamat}
            <button onClick={() => setEditSiswa(siswa)}>Edit</button>
            <button onClick={() => deleteSiswa(siswa.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiswaList;