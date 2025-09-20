import fs from 'fs';
const readFile = (filePath) => {    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File contents:", data);
    });
};
readFile('./greet.js'); 