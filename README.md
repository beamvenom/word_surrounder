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
  1. Install [Git Bash](https://git-scm.com/downloads) - You will clone the repository with this. (Just click next on everything in the installation if you do not care)
  2. Open Git Bash and cd to your preferred download directory. (Try "cd desktop" right after opening git bash if you are lost)
  3. Clone the repo
     ```bash
     git clone https://github.com/beamvenom/word_surrounder.git
     ```
  You now have this repository downloadeded to your desktop
     
#### 2. Install Python and Poetry to be able to run the back-end
##### 2a. Install [Python3.10.0](https://www.python.org/downloads/) **VERY IMPORTANT THAT YOU CLICK ON "Add Python 3.10 to PATH"** See picture
<p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/pythonscreenshot.png?raw=true" />
</p> 

##### 2b. Install Poetry plug-in by yourself by visiting [here](https://python-poetry.org/docs/) or follow theses steps.
###### 1. 
   If Windows: 
     1. open Windows Powershell and type this  
     ```bash
     (Invoke-WebRequest -Uri https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py -UseBasicParsing).Content | python -
     ``` 
     2. Restart Windows Powertshell
     3. Inside the Powershell, cd to ./word_surrounder/backend
     4. type
     ```bash
     poetry install
     ``` 
     Preparation finished! 
     
   If osx / linux / bashonwindows
     1.
     ```bash
        curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
     ```
     2. Restart the terminal.
     3. Inside the terminal, cd to ./word_surrounder/backend
     4. typ 
     ```bash
     poetry install
     ``` 
     Preparation finished! 
     
#### 3. Install NPM and react-scripts to be able to run the front-end
  3a. Install [Node.js](https://nodejs.org/en/download/) (Just click next on everything in the installation if you do not care)
  3b. Install react-scripts by opening preferred terminal and typing below (THIS MIGHT TAKE SOME TIME)
   ```bash
   npm install react-scripts
   ```
   
  3.
## Usage

After all the installations are finished.
##### 1. Start the back-end by:
          1a. Opening Windowsrunning main.py through poetry. (From the directory .../word_surrounder/backend, type "poetry run python src/main.py"
3. Start the front-end by using react "npm start" (From the directory .../word_surrounder/frontend)
4. Open up http://localhost:3000/ and you should be greeted with a page like in the screenshot below.
<p align="center">
  <img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot3.png?raw=true" />
</p>

4. Pressing the blue/white button will prompt a file input. 
5. Inputting a text file will result in the picture below. (Notice that "the" is the most used word)

<p align="center">
  <img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot2.png?raw=true" />
</p>

