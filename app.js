var password = ("Error! Please enter a valid Password.")
alert (password)

var Welcome = ("Welcome to JS Land....\nHappy Coding!")
alert(Welcome);

var third = ("Welcome to JS Land....")
alert (third)

var Happy = ("Happy Coding! \nPrevent this message from creating dialogs")
alert (Happy)

var Browser = ("Hello... I Can Run JS Through my Web Browser's Console")
console.log(Browser)
alert(Browser)

var message = ("Hello World")
alert(message)

var username = ("Nawaz Mohammad Arif")
alert(username)

var age = ("19 years old")
alert(age)

var certified = ("Certified Mobile Application Development")
alert(certified)

var piz = ("PIZZA \nPIZZ\nPIZ\nPI\nP")
alert(piz)

var mail = ("My Email Address is nawazmemon973@gmail.com" )
alert(mail)

var learn = ("I am trying to learn from the Book A Smarter  \nway to learn JavaScript")
alert (learn)
{
var write = ("Yah ! I can write HTML content through JavaScript")
document.write(write)
}
var symbols = ("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”")
alert(symbols)

var aage = ("I am 19 years old")
alert (aage)

var visit = ("You have visited this site 2 times")
alert (visit)

var birth = ("My birth year is 2001<br/> Data Type of my declared variable is number <br/>")
document.write(birth)

var naaaam = ("John Doe")
var shirt = ("Ordered")
var Ordered = ("5 T-Shirt")
var store = ("(s) on XYZ Clothing Store")
document.write(naaaam.bold()+ shirt + Ordered.bold() + store)

var head = ("<br/><br/><br/>Rules for naming JS Variables <br/><br/><br/>")
var lineee1 = ("Variable name only contain, numbers, $ and _. For example: $my_1stVariable")
var lineee2 = ("Variable must being with a letter, $ or_. For example: $name, name or name")
var lineee3 = ("Variable names are case sensitive")
var lineee4 = ("Variable names should not be JS Keyword <br/><br/><br/>")
document.write(head.bold() + lineee1 + lineee2 + lineee3 + lineee4)

var a = 3;
var b = 5;
document.write("The Sum of 3 and 5 is \n" + (a+b))
document.write("<br/>The Subtraction of 3 and 5 is \n" + (a-b))
document.write("<br/>The Multiplication of 3 and 5 is \n" + (a*b))
document.write("<br/>The Division of 3 and 5 is \n" + (a/b))
document.write("<br/>The Modulus of 3 and 5 is \n" + (a%b))

var headddd = ("<br/><br/><br/>Value after variable declaration is Undefinded")
document.write(headddd)
var Initial;
Initial = 5;
document.write("<br/><br/>Initialvalue: \n" + Initial++)
document.write("<br/><br/><br/>Value after increment is: \n" + +Initial)
Initial = Initial+7
document.write("<br/><br/><br/>Value after addition is: \n" + Initial)
document.write("<br/><br/><br/>Value after decrement is: \n" + --Initial)
Initial = 0
document.write("<br/><br/><br/>The Reminder is: \n" + Initial)

var ticket = ("The Movie Ticket is of Rs. 600")
var howmany = +prompt("Enter how many tickets you want")
document.write("The Total cost to buy \n" + howmany + "\ntickets of a movie is \n" + howmany*600 + "\nPKR")

var table = +prompt("Enter Table number which you want to display")
var startt = +prompt("Enter from where you want to start")
var endt = +prompt("Enter where you want to stop")

for (var table; startt <= endt; startt++){

document.write(table + "\nx\n" + startt + "\n=\n" + (table*startt) + "<br />")
}

var shopping = ("Shopping Cart")
var item1 = 650
var quantityitem1 = 3
var item2 = 100
var quantityitem2 = 7
var shippingcharges = 100

document.write(shopping + "<br / ><br / ><br / ><br / >"+ "Price of item 1 is \n" + item1)
document.write("<br / >"+ "Quantity of item 1 is \n" + quantityitem1)
document.write("<br / >"+ "Price of item 2 is \n" + item2)
document.write("<br / >"+ "Quantity of item 2 is \n" + quantityitem2)
document.write("<br / >"+ "Shipping Charges 1 is \n" + shippingcharges + "<br / ><br / ><br / >")

document.write("The Total Cost of your order is Rs. \n" + (item1*quantityitem1+item2*quantityitem2+shippingcharges))

var marsheet = ("Marks Sheet")
var totalmarks = 980
var marksobtained = 804

document.write(marsheet + "<br /><br /><br />")
document.write("Total Marks\n:\n" + totalmarks + "<br / >")
document.write("Total Marks\n:\n" + marksobtained + "<br / >")
document.write("Percentage\n:\n" + marksobtained/totalmarks*100 + "%")

var USDollar = 10
var SaudiRiyal  = 25

document.write("Total Currency in PKR \n : \n" + ((USDollar*104.80) + (SaudiRiyal*28)))

var anynum = 5
document.write(((anynum+5)*10)/2)

var agecalcu = ("Age Calculator")
var currentyear = 2016
var birthyear = 1992
document.write("Your Age is : \n" + (currentyear-birthyear))

var snacccck = ("The Lifetime Supply Calculator")
var snack = ("Chocalate Chips")
var currage = 15
var maxage = 65
var perdaya = 3

document.write("Favourite Snack :\n" + snack + "<br />")
document.write("Current Age :\n" + currage + "<br />")
document.write("Estimated Maximum Age :\n" + maxage + "<br />")
document.write("Amount of Snacks per day :\n" + perdaya + "<br />")
document.write("You will need\n" + ((maxage-currage)*3) +"\n" + snack + "\nto last you until the ripe old age of\n" + maxage)

a = 2;
b = 1;
var resultt = ("Result:")
document.write(resultt+ "<br />")
document.write("Now the value of a is:\n"+a + "<br />")
document.write("Now the value of b is:\n"+b + "<br /><br />")
document.write("...................................<br /><br /><br />")

document.write("The value of --a is:\n"+ --a + "<br />")
document.write("Now the value of a is:\n"+ a + "<br /><br /><br />")

document.write("The value of --a - --b is:\n"+ (--a - --b)+ "<br />")
document.write("Now the value of a is:\n"+ a + "<br />")
document.write("Now the value of b is:\n"+ b + "<br /><br /><br />")

document.write("The value of --a - --b + ++ b is:\n"+ (--a - --b + ++b)+ "<br />")
document.write("Now the value of a is:\n"+ a + "<br />")
document.write("Now the value of b is:\n"+ b + "<br /><br /><br />")

document.write("The value of --a - --b + ++ b + b-- is:\n"+ (--a - --b + ++b + b--)+ "<br />")
document.write("Now the value of a is:\n"+ a + "<br />")
document.write("Now the value of b is:\n"+ b + "<br /><br /><br />")

var greetu = prompt("Please Enter Your Name Here")
document.write("Welcome ! \n\n" + greetu)

var table = +prompt("Enter Table number which you want to display")
var startt = +prompt("Enter from where you want to start")
var endt = +prompt("Enter where you want to stop")

for (var table; startt <= endt; startt++){
document.write(table + "\nx\n" + startt + "\n=\n" + (table*startt) + "<br />")

var city = prompt("Enter your City")
var city = ("Karachi")
alert("Karachi is the city of lights")

var genderrr = prompt("Enter your gender")
var formale = ("Good Morning Sir")
var forfemale = ("Good Morning Ma'am")

if (genderrr === "male"){
    alert(formale)
}

else if(genderrr === "female"){
    alert(forfemale)
}
else{
    alert("Please check you gender and enter correctly")
}

var fuel = prompt("Enter your current fuel in liters")

if (fuel == 0.25){
    alert("Please refill your fuel")
}
else {
    alert("Don't Worry will remind you when fuel is required")
}

var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}

var bbb = 82; 
if (bbb++ === 83){ 
    alert("given condition for variable b is true"); 
}

var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
} 
if (c === 13){ 
    alert("condition 2 is true"); 
} 
if (++c < 14){
     alert("condition 3 is true");
     } 
     if(c === 14){ 
         alert("condition 4 is true"); 
        }

var materialCost = 20000;
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}

if (true){ 
    alert("True"); } 
    if (false){ 
        alert("False"); 
    }

if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}
}