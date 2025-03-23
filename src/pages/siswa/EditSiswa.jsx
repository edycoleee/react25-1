import React from 'react'

function EditSiswa({ tbSiswa }) {
  return (
    <div>
      {tbSiswa.map((siswa) => (
        <div key={siswa.id}>
          <p>
            {siswa.id} . {siswa.siswaName} - {siswa.siswaAlamat} {"  "}
            <button>Edit</button>{"  "}
            <button>Delete</button>
          </p>
        </div>
      ))}
    </div>
  )
}

export default EditSiswa