var userFirst = prompt("Fisrt Name")
var userSecond = prompt("Last Name")
var fullName = userFirst + " " + userSecond 
document.write("Hello Good Morning"+ ' ' +  "<b>"+ fullName.toUpperCase() +"</b>")


var user = prompt("What is Your Favorite Mobile Phone Model")
document.write("<br>" + "Your Favorite Mobile Phone Model Is : " + "<b>" + user.toUpperCase() + "</b>" + "<br />" + "Your Length is : " + "<b>" + user.length + "</b>")




var usr = prompt("Search Name like a 'Pakistani..'")
document.write("<br>" + "Your Search Word Is " + "<b>" + usr.toUpperCase() + "</b>" + "<br />" + "Index of 'n' " + usr.indexOf("n"))



var user = prompt("Search like a 'Hello World' ")
document.write("<br>" + "you search is " + "<b>" + user.toUpperCase() + "</b>" +'<br>'+ "length of 'L' is " + user.lastIndexOf("l"))

var user = prompt("Search any word")
document.write("<br>" + "Your search word is " + "<b>" + user.toUpperCase() + "</b>" + "<br />" + "Character Of Index 3rd : " + user.charAt(3))



var userFirst = prompt("Enter Fisrt Name")
var userSecond = prompt("Enter Last Name")
var fullName = userFirst.concat(" ", userSecond)
document.write("<br />" + "Using Concat Function " + "<b>" + fullName.toUpperCase() + "</b>")

var city = "Hyderabad";
var user = prompt("search like a hyderabad")
document.write("<br>" + "City is " + user + "<br>" + "After Replacement is " + city.replace("Hyder","Islam"));


var message = "Ali and Sami are best friends. They play cricket and football together"
document.write("<br>" + "Using Replace Method " + "<br>" + "<b>" + message.replace(/and/g, "&") + "</b>");





var str = "472";
document.write("<br>"+ "Data type of str: " + typeof str);
str = Number(str);
document.write("<br>"+ "Data type of str: " + typeof str);
