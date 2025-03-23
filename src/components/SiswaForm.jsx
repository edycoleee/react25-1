//src/components/SiswaForm.jsx
import React, { useState, useEffect } from 'react';

const SiswaForm = ({ addSiswa, editSiswa, updateSiswa, setEditSiswa }) => {
  const [siswaName, setSiswaName] = useState('');
  const [siswaAlamat, setSiswaAlamat] = useState('');

  useEffect(() => {
    if (editSiswa) {
      setSiswaName(editSiswa.siswaName);
      setSiswaAlamat(editSiswa.siswaAlamat);
    } else {
      setSiswaName('');
      setSiswaAlamat('');
    }
  }, [editSiswa]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const siswa = { siswaName, siswaAlamat };
    console.log("SISWA :", siswa);
    console.log("EDITSISWA :", editSiswa);
    if (editSiswa) {
      siswa.id = editSiswa.id;
      updateSiswa(siswa);
      setEditSiswa(null);
    } else {
      addSiswa(siswa);
    }
    setSiswaName('');
    setSiswaAlamat('');
  };

  return (
    <>
      <h2>Tambah Siswa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama Siswa"
          value={siswaName}
          onChange={(e) => setSiswaName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Alamat Siswa"
          value={siswaAlamat}
          onChange={(e) => setSiswaAlamat(e.target.value)}
          required
        />
        <button type="submit">{editSiswa ? 'Update' : 'Tambah'}</button>
      </form>
    </>
  );
};

export default SiswaForm;