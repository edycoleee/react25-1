import React, { useState } from 'react';

function AddSiswa() {

  const [siswaName, setSiswaName] = useState('');
  const [siswaAlamat, setSiswaAlamat] = useState('');

  const addSiswa = (siswa) => {
    console.log("SIMPAN ADD :", siswa);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const siswa = { siswaName, siswaAlamat };
    addSiswa(siswa);

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
        <button type="submit">Tambah</button>
      </form>
    </div>
  )
}

export default AddSiswa