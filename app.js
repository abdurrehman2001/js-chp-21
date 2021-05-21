// Ques # 1
var userFirst = prompt("Fisrt Name")
var userSecond = prompt("Last Name")
var fullName = userFirst + " " + userSecond 
document.write("Hello Good Morning"+ ' ' +  "<b>"+ fullName.toUpperCase() +"</b>")

// Ques # 2
var user = prompt("What is Your Favorite Mobile Phone Model")
document.write("<br>" + "Your Favorite Mobile Phone Model Is : " + "<b>" + user.toUpperCase() + "</b>" + "<br />" + "Your Length is : " + "<b>" + user.length + "</b>")

// Ques # 3
var usr = prompt("Search Name like a 'Pakistani..'")
document.write("<br>" + "Your Search Word Is " + "<b>" + usr.toUpperCase() + "</b>" + "<br />" + "Index of 'n' " + usr.indexOf("n"))


// Ques # 4
var user = prompt("Search like a 'Hello World' ")
document.write("<br>" + "you search is " + "<b>" + user.toUpperCase() + "</b>" +'<br>'+ "length of 'L' is " + user.lastIndexOf("l"))

// Ques # 5
var user = prompt("Search any word")
document.write("<br>" + "Your search word is " + "<b>" + user.toUpperCase() + "</b>" + "<br />" + "Character Of Index 3rd : " + user.charAt(3))


// Ques # 6
var userFirst = prompt("Enter Fisrt Name")
var userSecond = prompt("Enter Last Name")
var fullName = userFirst.concat(" ", userSecond)
document.write("<br />" + "Using Concat Function " + "<b>" + fullName.toUpperCase() + "</b>")

// Ques # 7
var city = "Hyderabad";
var user = prompt("search like a hyderabad")
document.write("<br>" + "City is " + user + "<br>" + "After Replacement is " + city.replace("Hyder","Islam"));

// Ques # 8
var message = "Ali and Sami are best friends. They play cricket and football together"
document.write("<br>" + "Using Replace Method " + "<br>" + "<b>" + message.replace(/and/g, "&") + "</b>");


// Ques # 9
var str = "472";
document.write("<br>"+ "Data type of str: " + typeof str);
str = Number(str);
document.write("<br>"+ "Data type of str: " + typeof str);


// Ques # 10
var user = prompt("Enter Any Fruit Name")
document.write("Small Letters " + "<b>" + user + "</b>" + "<br>" + "Upper Case " + "<b>" + user.toUpperCase() + "</b>")

//  Ques # 11
var user = prompt("Enter Any Name")
document.write("First Word Capital " + "<b>"+ user[0].toUpperCase() + user.slice(1) + "</b>")


// Ques # 12
var num = 35.36;
num = num.toString()
var res = num.replace(".", "")
document.write("With point " + num + "<br>" + "Without Point " + res)


// / Ques # 13
let userName = prompt("Enter user name ");
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === "@" || userName[i] === "," || userName[i] === "." || userName[i] === "!") {
        alert("Please Enter a valid username");
        break;
    }
}



