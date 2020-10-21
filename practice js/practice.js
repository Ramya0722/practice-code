/*A concatenation project */
var theme = document.getElementById("circleoflife");
 var poetline = theme.innerHTML;
theme.innerHTML  = "the first line of the lion king song is:"+ poetline;


/*Accepting user input and fixing their data project: ask user for url, check url starts with http

var url = prompt("Enter a url");
if(url.substr(0,4) != "http"){
    url="http://" + url
}

var link = document.getElementById("link");
link.innerHTML = "<a href=' " + url +"'>" + url + "javggg</a>";*/

/*Conditional statement project : ask user for a number,cast the input to number,number is valid, if num >18 change text*/ 

var num=prompt("enter the number");
num =Number(num)

if(num && num >=18){
    var output = document.getElementById("ele");
    output.innerHTML = "You entered the number " + num;
}
else{
    var output = document.getElementById("ele");
    
    output.innerHTML= "please enter greater than 18 number";
}

/* document.getElementById("") is replaced by the $("")*/

/*Mini tip calculator project using functions*/

function calculator(totalamount, tip=10, tiponly=false){
    tip = tip/100
    var tipamount = totalamount * tip
    totalamount = totalamount + tipamount
    if(tiponly){
        return tipamount
    }
    return totalamount

}

var bill = calculator(40,10);
console.log(bill)
var totaltip = calculator(40,10,true);
console.log(totaltip)






