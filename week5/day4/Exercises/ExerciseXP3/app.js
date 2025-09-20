const fileManager = require('./fileManager.js');
fileManager.readFile('./week5/day4/Exercises/ExerciseXP3/Hello_World.txt');
fileManager.writeFile('./week5/day4/Exercises/ExerciseXP3/ByeWorld.txt', 'Writing to the file');
fileManager.readFile('./week5/day4/Exercises/ExerciseXP3/ByeWorld.txt');