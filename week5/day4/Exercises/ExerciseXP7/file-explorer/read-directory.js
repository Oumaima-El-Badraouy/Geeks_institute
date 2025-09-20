const fs=require("fs");
function readDirectoryex(path){
        fs.readdir(path,(err,files)=>{
            if(err){
                console.error("Error reading directory:",err);
            }else{
                console.log("Files in directory:",files);
            }
        });
    }
readDirectoryex("./week5/day4/Exercises/ExerciseXP7/file-explorer"); // Example usage