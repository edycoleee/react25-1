//src/pages/siswa/EditSiswa.jsx
import React from 'react'

function EditSiswa({ tbSiswa, deleteSiswa, setEditSiswa }) {

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