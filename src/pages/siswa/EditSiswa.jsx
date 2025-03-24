//src/pages/siswa/EditSiswa.jsx
import React from 'react'

function EditSiswa({ tbSiswa, deleteSiswa, setEditSiswa }) {

  return (
    <div>
      {tbSiswa.map((siswa) => (
        <div key={siswa.id}>
          <p>
            <span data-testid="siswa-id">{siswa.id}</span> .
            <span data-testid="siswa-name">{siswa.siswaName}</span> -
            <span data-testid="siswa-alamat">{siswa.siswaAlamat}</span> {"  "}
            <button onClick={() => setEditSiswa(siswa)}>Edit</button>{"  "}
            <button onClick={() => deleteSiswa(siswa.id)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  )
}

export default EditSiswa