## word-surrounder-fullstack
<p align="center">
  <img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot.png?raw=true" />
</p>

This project is to create a program that reads a text file and surrounds every occurence of the most used word in the text with "foo" and "bar"

For example, if you input a text file with this text: "The therapist is the hero." 
The program will print out "fooThebar therapist is foothebar hero"
### Built With

* [React.js](https://reactjs.org/) Front-end
* [Python3.10.0](https://www.python.org/) Back-end

### Prerequisites

[Git Bash](https://www.atlassian.com/git/tutorials/install-git#windows) - You will clone the repository with this.

### Installation

1. Open Git Bash and cd to your preferred download directory. (Try "cd desktop" after opening git bash if you are lost)
2. Clone the repo
   ```bash
   git clone https://github.com/beamvenom/word_surrounder.git
   ```


## Usage

After installation is finished.
1. Start the back-end by running main.py through poetry. (From the directory .../word_surrounder/backend, type "poetry run python src/main.py"
2. Start the front-end by using react "npm start" (From the directory .../word_surrounder/frontend)
3. Open up http://localhost:3000/ and you should be greeted with a page like in the screenshot below.
<p align="center">
  <img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot3.png?raw=true" />
</p>

4. Pressing the blue/white button will prompt a file input. 
5. Inputting a text file will result in the picture below. (Notice that "the" is the most used word)

<p align="center">
  <img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot2.png?raw=true" />
</p>

