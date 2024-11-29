const fs=require("fs");
fs.appendFileSync("./mymewfile1.txt","\n"+new Date().toLocaleDateString());
