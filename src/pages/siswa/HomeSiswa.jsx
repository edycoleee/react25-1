//src/pages/siswa/HomeSiswa.jsx
import React, { useState } from 'react';
import AddSiswa from './AddSiswa';
import EditSiswa from './EditSiswa';
import { nanoid } from 'nanoid';

function HomeSiswa() {

  const [tbSiswa, setTbSiswa] = useState([]);
  const [editSiswa, setEditSiswa] = useState(null);

  const addSiswa = (siswa) => {
    siswa.id = nanoid();
    setTbSiswa([...tbSiswa, siswa]);
  };

  const deleteSiswa = (id) => {
    setTbSiswa(tbSiswa.filter((siswa) => siswa.id !== id));
  };

  const updateSiswa = (updatedSiswa) => {
    setTbSiswa(tbSiswa.map((siswa) => (siswa.id === updatedSiswa.id ? updatedSiswa : siswa)));
  };

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
        <AddSiswa addSiswa={addSiswa} editSiswa={editSiswa} updateSiswa={updateSiswa} setEditSiswa={setEditSiswa} />
      </fieldset><br />
      <fieldset>
        <legend>
          DATA - EditSiswa,Delete
        </legend>
        <h3>Data Siswa</h3>
        <EditSiswa tbSiswa={tbSiswa} deleteSiswa={deleteSiswa} setEditSiswa={setEditSiswa} />
      </fieldset>
    </div>
  )
}

export default HomeSiswa