import React from 'react'
import AddSiswa from './AddSiswa';
import EditSiswa from './EditSiswa';

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

function HomeSiswa() {
  return (
    <div>
      <fieldset>
        <legend>
          JUDUL - App
        </legend>
        <h1>Aplikasi Siswa</h1>
      </fieldset> <br />
      <fieldset>
        <legend>
          FORM - AddSiswa
        </legend>
        <h3>Add Siswa</h3>
        <AddSiswa />
      </fieldset><br />
      <fieldset>
        <legend>
          DATA - EditSiswa,Delete
        </legend>
        <h3>Data Siswa</h3>
        <EditSiswa tbSiswa={tbSiswa} />
      </fieldset>
    </div>
  )
}

export default HomeSiswa