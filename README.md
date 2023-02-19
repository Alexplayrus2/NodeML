## Note: Teaching the ai atleast with a one sentance is required.
# API
## Functions:
### teach(sentance ***REQUIRED***, response ***OPTIONAL***) - Puts a sentance and a response into the AI's database
### getalldata() - Gets everything in the AI's database
### generateresponse(sentance ***REQUIRED***) - Returns a response based off the "sentance" argument
## Basic Usage/Examples
### Basic Example
```js
const ml = require("./ai.js")
ml.teach("are you smart?", "Yes.")
console.log(ml.generateresponse("are you smart?"))
```
### Simple CLI chat-bot
```js
const ml = require("./nodeml/ai.js")
ml.teach("hi", "Howdy!")
ml.teach("how are you?", "I am doing good!")
async function getinput()
  {
    const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('> ', sentance => {
  console.log(ml.generateresponse(sentance));
  readline.close();
  getinput()
});
  }
getinput()
```
