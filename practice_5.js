//Find the grade for marks

marks = 92;

if(marks >= 90 && marks <= 100){
    console.log("You received O grade"); //if marks are between 90 and 100 then it will print "O" grade
}
else if(marks >= 80 && marks < 90){
    console.log("You received A+ grade"); //if marks are between 80 and 90 then it will print "A+" grade
}
else if(marks >= 70 && marks < 80){
    console.log("You received A grade"); // if marks are between 70 and 80 then it will print "A" grade
}
else if(marks >= 60 && marks < 70){
    console.log("You received B grade"); //if marks are between 60 and 70 then it will print "B" grade
}
else if(marks >= 50 && marks <60){
    console.log("You received C grade"); //if marks are between 50 and 60 then it will print "C" grade
}
else if(marks >= 40 && marks < 50){
    console.log("You received D grade"); //if marks are between 40 and 50 then it will print "D" grade
}
else{
    console.log("You are failed"); //Else it will print "Failed"
}
