import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FileUpload from '../FileUpload.jsx'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

let getByTestId
beforeEach(() => {
    const setUploadedFile = jest.fn()
    const component = render(<FileUpload setUploadedFile = {setUploadedFile}></FileUpload>)
    getByTestId = component.getByTestId
    
  });

test("Upload text renders correctly",() =>{
    expect(getByTestId("uploadText")).toHaveTextContent("Upload a text and the most occuring word in the text will be surronded by foo and bar!")
})
test("File field text renders correctly",() =>{
    expect(getByTestId("fileFieldText")).toHaveTextContent("Upload a text file")
})
test("File field accepts text file correctly",() =>{
    const file = new File(['hello'], 'text-file.txt', { type: 'text/plain' })
    fireEvent.change(getByTestId("fileField"), {
        target: { files: [file]},
    })
    let text = document.querySelector('input[type=file]')
    expect(text.files[0].name).toBe('text-file.txt');
    expect(getByTestId("uploadText")).toHaveTextContent('Success')
})
test("File field denies incorrect file format correctly",() =>{
    const file = new File(['(⌐□_□)'], 'png-file.png', { type: 'image/png' })
    fireEvent.change(getByTestId("fileField"), {
        target: { files: [file]},
    })
    let image = document.querySelector('input[type=file]')
    expect(image.files[0].name).toBe('png-file.png');
    expect(getByTestId("uploadText")).toHaveTextContent('The supported file formats are .txt .rtf .file .md')
})

test("matches snapshot", () => {
    const tree = renderer.create(<FileUpload></FileUpload>)
    expect(tree).toMatchSnapshot()
})