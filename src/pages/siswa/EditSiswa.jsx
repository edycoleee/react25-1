import React from 'react'

function EditSiswa({ tbSiswa }) {

  const deleteSiswa = (id) => {
    console.log("DELETE ID : ", id);
  };
  const setEditSiswa = (siswa) => {
    console.log("EDIT SISWA :", siswa);
  }


  return (
    <div>
      {tbSiswa.map((siswa) => (
        <div key={siswa.id}>
          <p>
            {siswa.id} . {siswa.siswaName} - {siswa.siswaAlamat} {"  "}
            <button onClick={() => setEditSiswa(siswa)}>Edit</button>{"  "}
            <button onClick={() => deleteSiswa(siswa.id)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  )
}

export default EditSiswa