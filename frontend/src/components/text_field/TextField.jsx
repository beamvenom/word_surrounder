import React from 'react'

const processFile = (file) => {
  file.text().then((res) =>
    fetch('http://localhost:8000/uploadfile/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ text: res }),
    }).then((response) => {
      response.json().then((value) => {
        document.getElementById('showText').innerHTML = value
        document.getElementById('uploadText').innerHTML = 'Success!'
      })
    }).catch(() => {
      document.getElementById('showText').innerHTML = 'Failed to connect to server'
      document.getElementById('uploadText').innerHTML = 'Failure'
    })
  )
}
const TextField = (props) => {
  if (props.uploadedFile !== null) {
    processFile(props.uploadedFile)
  }
  return (
    <pre data-testid = "showText" id="showText" align="center">
      Processed text will be printed here!
    </pre>
  )
}
export default TextField
