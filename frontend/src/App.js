import React, { useState } from 'react'
import FileUpload from './components/file_upload/FileUpload.jsx'
import TextField from './components/text_field/TextField.jsx'

const App = () => {
  const [uploadedFile, setUploadedFile] = useState(null)
  const file = new File(['hello'], 'text-file.txt', { type: 'text/plain' })
  return (
    <div>
      <div>
        
        <FileUpload setUploadedFile={setUploadedFile}/>
        <TextField uploadedFile={uploadedFile} file = {file}/>
      </div>
    </div>
  )
}
export default App
