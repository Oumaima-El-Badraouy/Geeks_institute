const fs=require("fs");
function copyFile(source,destination){
    fs.copyFile(source,destination,(err)=>{
        if(err){
            console.error("Error copying file:",err);
        }else{
            console.log("File copied successfully");
        }
    });
}
copyFile("./week5/day4/Exercises/ExerciseXP3/Hello_World.txt","./week5/day4/Exercises/ExerciseXP7/Hello_World.txt");