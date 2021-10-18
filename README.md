# word-surrounder-fullstack
<p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot.png?raw=true" />
</p>

This project is to create a program that reads a text file and surrounds every occurence of the most used word in the text with "foo" and "bar"

For example, if you input a text file with this text: "The therapist is the hero." 
The program will print out "fooThebar therapist is foothebar hero"
### Built With

* [React.js](https://reactjs.org/) Front-end
* [Python3.10.0](https://www.python.org/) Back-end (Deployment with the help of [Poetry](https://python-poetry.org/) )

### Installation

#### 1. Clone this repo
- (Windows Only)Install [Git Bash](https://git-scm.com/downloads) - You will clone the repository with this. (Just click next on everything in the installation if you do not care)
- Open Git Bash/linux/osx terminal and cd to your preferred download directory. (If you are lost, open Git Bash and type "cd desktop")
- Clone the repo:
```bash
git clone https://github.com/beamvenom/word_surrounder.git
```
You now have this repository downloadeded to your desktop

#### 2. Install Python and Poetry to be able to run the back-end
- Install [Python3.10.0](https://www.python.org/downloads/) **VERY IMPORTANT THAT YOU CLICK ON "Add Python 3.10 to PATH"** See picture
<p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/pythonscreenshot.png?raw=true" />
</p> 

- Install Poetry plug-in by yourself by visiting [here](https://python-poetry.org/docs/) or follow theses steps.
##### If Windows: 
- Open Windows Powershell and type

```bash
(Invoke-WebRequest -Uri https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py -UseBasicParsing).Content | python -
``` 

- Restart Windows Powertshell
- Inside the Powershell, cd to ./word_surrounder/backend
- Type
```bash
poetry install
``` 

Preparation finished! 

#### If osx / linux / bashonwindows
- Type
```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

- Restart the terminal.
- Inside the terminal, cd to ./word_surrounder/backend
- Type 

```bash
poetry install
``` 

Preparation finished! 

#### 3. Install NPM and react-scripts to be able to run the front-end
- Install [Node.js](https://nodejs.org/en/download/) (Just click next on everything in the installation if you do not care)
- Install node-modules for the projects by opening preferred terminal and typing below (THIS MIGHT TAKE SOME TIME)
```bash
npm install
```

## Usage

After all the installations are finished.
#### 1. Start the back-end:
- Open Windows Powershell/(other terminals) 
- cd to ./word_surrounder/backend 
- Type
```bash
poetry run python src/main.py
```
#### 2. Start the front-end:
- Open Windows Powershell/(other terminals) 
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
- Upload a text file to get a result. (Notice that "the" is the most used word in the screenshot)

<p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot2.png?raw=true" />
</p>

