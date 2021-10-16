import React, { useState } from 'react'
import FileUpload from './components/file_upload/FileUpload.jsx'
import TextField from './components/text_field/TextField.jsx'

const App = () => {
  const [uploadedFile, setUploadedFile] = useState(null)
  return (
    <div>
      <FileUpload setUploadedFile={setUploadedFile} />
      <TextField uploadedFile={uploadedFile} />
    </div>
  )
}
export default App
