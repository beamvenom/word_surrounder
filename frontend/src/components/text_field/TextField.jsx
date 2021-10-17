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
        document.getElementById('showText').innerHTML = value
      })
    })
  )
}
const TextField = (props) => {
  if (props.uploadedFile !== null) {
    processFile(props.uploadedFile)
  }
  return (
    <pre id="showText" align="center">
      Processed text will be printed here!
    </pre>
  )
}
export default TextField
