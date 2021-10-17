import React from 'react'
import {
  FileUploadContainer,
  FormField,
  FileUploadText,
  UploadFileBtn,
} from './FileUpload.js'

const FileUpload = (props) => {
  const onFileChange = () => {
    var uploadedFile = document.querySelector('input[type=file]').files[0]
    var allowedFileFormats = ['txt', 'rtf', 'md', 'file']
    if (typeof uploadedFile !== 'undefined') {
      var fileFormat = uploadedFile.name.split('.')[1]
      if (allowedFileFormats.includes(fileFormat)) {
        props.setUploadedFile(document.querySelector('input[type=file]').files[0])
        document.getElementById('uploadText').innerHTML = 'Success!'
      } else {
        document.getElementById('uploadText').innerHTML =
          'The supported file formats are .txt .rtf .file .md'
      }
    }
  }
  return (
    <>
      <FileUploadContainer>
        <FileUploadText id="uploadText">
          The most frequent occuring word will be surronded by foo and bar!
        </FileUploadText>
        <UploadFileBtn>
          <i className="fas fa-file-upload" />
          <span> Upload a text file </span>
          <FormField type="file" onChange={onFileChange} />
        </UploadFileBtn>
      </FileUploadContainer>
    </>
  )
}
export default FileUpload
