//src/pages/siswa/AddSiswa.jsx
import React, { useEffect, useState } from 'react';

function AddSiswa({ addSiswa, editSiswa, updateSiswa, setEditSiswa }) {

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

  //SIMPAN TAMBAH SAJA
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const siswa = { siswaName, siswaAlamat };
  //   addSiswa(siswa);

  //   setSiswaName('');
  //   setSiswaAlamat('');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const siswa = { siswaName, siswaAlamat };
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Siswa:
          <input
            type="text"
            placeholder="Nama Siswa"
            value={siswaName}
            onChange={(e) => setSiswaName(e.target.value)}
            required
          />
        </label><p />
        <label>
          Alamat Siswa:
          <input
            type="text"
            placeholder="Alamat Siswa"
            value={siswaAlamat}
            onChange={(e) => setSiswaAlamat(e.target.value)}
            required
          />
        </label><p />
        <button type="submit">{editSiswa ? 'Update' : 'Tambah'}</button>
      </form>
    </div>
  )
}

export default AddSiswa