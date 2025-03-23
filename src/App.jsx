//src/App.jsx

const App = () => {

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
      </fieldset><br />
      <fieldset>
        <legend>
          DATA - EditSiswa,Delete
        </legend>
        <h3>DAFTAR SISWA</h3>
      </fieldset>
    </div>
  );
};

export default App;