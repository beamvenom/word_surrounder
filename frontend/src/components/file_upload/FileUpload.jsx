import React from 'react'
import {
  FileUploadContainer,
  FormField,
  FileUploadText,
  UploadFileBtn,
} from './FileUpload.js'

const FileUpload = (props) => {
  const onFileChange = () => {
    props.setUploadedFile(document.querySelector('input[type=file]').files[0])
  }
  return (
    <>
      <FileUploadContainer>
        <FileUploadText id="dropText">
          The most frequent word will be surronded by foo and bar!
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
