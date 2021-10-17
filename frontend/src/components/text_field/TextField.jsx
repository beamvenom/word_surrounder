import React from 'react'

const processFile = (file) => {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  file.text().then((res) =>
    fetch('http://192.168.10.123:8000/uploadfile/', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ text: res }),
    }).then((response) => {
      response.json().then((value) => {
        document.getElementById('show-text').innerHTML = value
      })
    })
  )
}
const TextField = (props) => {
  if (props.uploadedFile !== null) {
    if (typeof props.uploadedFile !== 'undefined') {
      var fileFormat = props.uploadedFile.name.split('.')[1]
      if (
        fileFormat === 'txt' ||
        fileFormat === 'rtf' ||
        fileFormat === 'md' ||
        fileFormat === 'file'
      ) {
        processFile(props.uploadedFile)
      } else {
        document.getElementById('show-text').innerHTML =
          'The supported file formats are .txt .rtf .file .md'
      }
    }
  }
  return (
    <pre id="show-text" align="center">
      Processed text will be printed here!
    </pre>
  )
}
export default TextField
