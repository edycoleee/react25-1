import React from 'react'

function AddSiswa() {
  return (
    <div>
      <form>
        <label>
          Nama Siswa:
          <input type="text" name="name" />
        </label><p />
        <label>
          Alamat Siswa:
          <input type="text" name="alamat" />
        </label><p />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddSiswa