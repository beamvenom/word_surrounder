import React, { useRef } from 'react'
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  TextField,
  BodyText,
} from './file-upload.styles'

const FileUpload = ({ ...otherProps }) => {
  const fileInputField = useRef(null)
  const handleUploadBtnClick = () => {
    fileInputField.current.click()
  }

  const showFile = () => {
    var preview = document.getElementById('show-text')
    var text = document
      .querySelector('input[type=file]')
      .files[0].text()
      .then((response) => {
        preview.innerHTML = response
        return response
      })
    console.log(text)
  }

  const postText = () => {
    var file = document.querySelector('input[type=file]').files[0]
    if (typeof file !== 'undefined') {
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      file.text().then((res) =>
        fetch('http://192.168.10.123:8000/uploadfile/', {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify({ text: res }),
        }).then((response) => {
          response.json().then((value) => {
            console.log(value)
            document.getElementById('show-text').innerHTML = value
          })
        })
      )
    }
  }
  const postText2 = () => {
    var file = document.querySelector('input[type=file]').files[0]
    if (typeof file !== 'undefined') {
      var fileType = file.name.split('.')[1]
      if (fileType === 'rtf' || fileType === 'txt') {
        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        file.text().then((res) =>
          fetch('http://192.168.10.123:8000/uploadfile/', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({ text: res }),
          }).then((response) => {
            console.log(response)
            response.json().then((value) => {
              console.log(value)
              document.getElementById('dropText').innerHTML =
                'Most frequent word is surrounded by foo and bar!'
              document.getElementById('show-text').innerHTML = value
            })
          })
        )
      } else {
        document.getElementById('dropText').innerHTML = 'Only .txt and .rtf files please!'
      }
    }
  }

  return (
    <>
      <FileUploadContainer>
        <DragDropText id="dropText"> Most frequent word finder! </DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          <i className="fas fa-file-upload" />
          <span> Upload {otherProps.multiple ? 'files' : 'a text file!'}</span>
        </UploadFileBtn>
        <FormField type="file" ref={fileInputField} onChange={postText} />
      </FileUploadContainer>
      <TextField id="show-text">Processed text will be printed here!</TextField>
    </>
  )
}
export default FileUpload
