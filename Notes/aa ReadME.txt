Using NodeJS 10.3..
Using Visual Studio Code

-> We can create our own module using $npm init
-> this will create package.json file containing all the information
-> we can specify "start": "node filename.js" in the package.json which will execute after running npm start

->NODEMON : 3rd party tool-> This will restart the server after we change the main file.
->use : $nodemon filename.js
->rs to restart 

-> **** FINDING & FIXING THE ERRORS *****
-> Debugger
-> To restart the Debugger automatically after each change in the code-> Debug -> Add Configuaration -> launch.json will pop-up from .vscode->Add restart: true,runtimeExecutable:'nodemon'(HERE WE REQUIRE TO INSTALL NODEMON GLOBALLY USING -g), console:'integratedTerminal'[optional but recommanded]