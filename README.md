# word-surrounder-fullstack
<p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot.png?raw=true" />
</p>

This project is to create a program that reads a text file and surrounds every occurence of the most used word in the text with "foo" and "bar".

For example, if you input a text file with this text: "The therapist is the hero." 
The program will print out "fooThebar therapist is foothebar hero"

Although it might be a simple program, this project tests one's skills on how to:
- Back-end program with Python.
- Front-end program with React.
- Connecting front-end with back-end through HTTP requests.
- Building REST APIs with Python library FASTApi.
- Unit test with Pytest.
- Making structured and readable code using the linter Pylint in Python and prettier in React. 

## Built With

* [React.js](https://reactjs.org/) Front-end
* [Python](https://www.python.org/) Back-end

## Installation

### Install Python and Poetry to be able to run the back-end
Install [Python3.10.0](https://www.python.org/downloads/) (**VERY IMPORTANT THAT YOU CLICK ON "Add Python 3.10 to PATH"**)
<p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/pythonscreenshot.png?raw=true" />
</p> 


### Install Poetry plug-in
#### Install Poetry plug-in by yourself by visiting [here](https://python-poetry.org/docs/) or follow theses steps:
1. Open preferred terminal and type
###### If Windows PowerShell: 
```bash
(Invoke-WebRequest -Uri https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py -UseBasicParsing).Content | python -
``` 
###### If osx / linux / bashonwindows
```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

2. Restart the terminal and cd to ./word_surrounder/backend
3. Type
```bash
poetry install
``` 

### Install NPM and react-scripts to be able to run the front-end
1. Install [Node.js](https://nodejs.org/en/download/)
2. Open preferred terminal and  cd to ./word_surrounder/frontend
3. Type below to install node-modules for the project
```bash
npm install
```

## Usage

After all the installations are finished.
#### 1. Start the back-end:
- Open preferred terminal
- cd to ./word_surrounder/backend 
- Type
```bash
poetry run python src/main.py
```
#### 2. Start the front-end:
- Open preferred terminal
- cd to ./word_surrounder/frontend 
- Type
```bash
npm start
```
#### Now the program should be running!
- If a website did not start. Open up http://localhost:3000/ and you should be greeted with a page like in the screenshot below.
<p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot3.png?raw=true" />
</p>

- Pressing the blue/white button will prompt a file upload. 
- Upload a text file to get every occurence of the most used word in the text surrounded with "foo" and "bar".

<p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot2.png?raw=true" />
</p>
(Notice that "the" is the most used word in this example)

## Running the tests 
#### 1. Back-end
```bash
cd backend
```
```bash
poetry run pytest -v
```
#### 2. Front-end
```bash
cd frontend
```
```bash
npm test
```
