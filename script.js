
//?CHAPTER 17-20

// // !QUESTION 1-2
// var arr=[
//     []
// ];

// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ];

// for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
//     // !QUESTION 3

   
//     for (var i=0;i<=10; i++){
//         console.log(i);
//     }
//  // !QUESTION 4

//  var table=parseInt(prompt("write a no for multiplication"));
//  var times=parseInt(prompt("How many times you want to multiply"));
//  for (var j = 1 ; j<=times; j++){    
//     document.write(table + "x" + j + "=" + table*j + "<br>");

// }

// // !QUESTION 5

// var fruits =["apple","mango","banana","oranges","grapes"];


// for (var k=0; k < fruits.length; k++){
// document.write(fruits[k] + "<br>");
// }
// document.write("Element at index 0 is " +  fruits[0] +"<br>");
// document.write("Element at index 1 is " +  fruits[1]+"<br>");
// document.write("Element at index 2 is " +  fruits[2] +"<br>");
// document.write("Element at index 3 is " +  fruits[3]+"<br>");
// document.write("Element at index 4 is " +  fruits[4]+"<br>");

//  // !QUESTION 6
 
//  document.write("<h3>Counting</h3>");
//  for (var c = 1;  c <= 20; c++)
//  {
//     document.write(c +  ",");
//  }
//  document.write("<br>");
//  document.write("<h3>Reverse Counting</h3>");

//  for (var c=20; c >=1; c--){
//     document.write(c + ",");
// }
// document.write("<br>");
// document.write("<h3>Even </h3>");
// for (var c=0; c<=20; c++){
//     if(c % 2 == 0){
//         document.write( c +",")
//     }
// }
// document.write("<br>");
// document.write("<h3>Odd</h3>");

// for (var c=1; c<=20; c++){
//     if(c % 2 != 0){
//         document.write( c +",")
//     }
// }



// document.write("<br>");
// document.write("<h3>Series</h3>");


// for (var c=1; c <=20; c++){
//     if(c %  2==0){
//     document.write(c + "K" +",");
// }
// }

// // !QUESTION 7

// var items =["apple","cake","cookie","chips","patties"];

//  var search = prompt("Enter an Item to select");
// var index= items.indexOf(search);

// if(index !== -1){
//     alert(search + " Is available at index " + index + " in our bakery" );
// }
// else{
//     alert(search + " Is not available in our bakery")
// }
// // !QUESTION 8


// var B =[25,40,18,34,65];
// document.write("<h3>Largest Number</h3>" + "[" + B + "," + " ]" + " = ");
// document.write(Math.max(...B));

// // !QUESTION 9


// var B =[24,31,90,34,5];
// document.write("<h3>Smallest Number</h3>" + "[" + B + "," + " ]" + " = ");
// document.write(Math.min(...B));

// // !QUESTION 10

// document.write("<h3>Multiply Ranging of 5</h3>");
// for (i = 5 ; i <= 100 ; i++){
//     if(i % 5 == 0){
//         document.write(i +",");
//     }
// } 

//?CHAPTER 21-25

// // !QUESTION 1

// var firstName = prompt("Enter First name ");
//     lastName = prompt("Enter Last name ");
//     fullName = firstName + " " + lastName;
//     alert("Hello " + fullName + " How are you!");

    
// // !QUESTION 2

// phone = prompt("your favorite mobile phone");

// document.write("My favorite Phone is: " + phone + "<br>");
// document.write("Length of string: " + phone.length);

// // !QUESTION 3

// var city = "pakistan";
// document.write( "Index of ' n': " + city.indexOf("n"));

// // !QUESTION 4

// var greet = "Hello world"
// document.write("last index of letter 'l': " + greet.lastIndexOf("l"));

// // !QUESTION 5

// document.write("Character at index 3: "+ city[3]);

// // !QUESTION 6


// var firstName = prompt("Enter First name ");
//     lastName = prompt("Enter Last name ");
//     fullName = firstName.concat("",lastName);
//     alert("Hello " + fullName + " How are you!");

//  // !QUESTION 7


//  var city = "Hayderabad"
// newCity = city.replace("Hayder","Islam");
// document.write(newCity);


//  // !QUESTION 8

//  var message = "Ali and sami are best friends, they play cricket and football togther.";
//  newMessege = message.replace(/and/g,"&");
//  document.write(newMessege);



//  // !QUESTION 9

//  var str ="472";
//  document.write(str + "<br>" + typeof(str) +"<br>" );

//  document.write(str + "<br>" + typeof Number(str));


//  // !QUESTION 10

// var userInput = prompt("Please enter something in lowercase");
// document.write(userInput.toUpperCase());


//  // !QUESTION 11
// if (userInput !==null)
// {
//     var capitalizeString = userInput.charAt(0).toUpperCase() +userInput.slice(1).toLowerCase();
//     alert("Title case: " + capitalizeString);
// }
//  // !QUESTION 12

//  var str =35.36;
//  document.write(str + "<br>" + typeof(str) +"<br>");
//  numString = str.toString();
//  newStr = numString.replace(".","");
// document.write(+ newStr + "<br>" + typeof(numString));


// // !QUESTION 13
// var symbols = ['!',',','.','@'];
// var userName = prompt("Enter Your Name");
// if (symbols.some(symbol =>userName.includes(symbol) )){
//     alert("Username " + userName + " is Invalid:")
// }
// else{
//     alert(userName + " is valid username");
    
// }



// // !QUESTION 14

// var items =["apple","cake","cookie","chips","patties"];
//  var search = prompt("Enter an Item to select");
// var index= items.indexOf(search);
// var lowerUserInput = search.toLowerCase();
// itemFound= items.some(item => item.toLowerCase()=== lowerUserInput);

// if(index !== -1 && itemFound){
//     alert(search + " Is available at index " + index + " in our bakery");
// }
// else{
//     alert(search + " Is not available in our bakery")
// }


// // !QUESTION 15


// var pass= prompt("Enter Password");

// if (pass.length >= 6 &&
//     /[a-zA-Z]/.test(pass) &&
//     /[0-9]/.test(pass) &&
//     !/^[0-9]/.test(pass)
    
//     ){

//         alert("password is valid");
//     }
//     else
//     {
//         alert("please enter a valid password");
//     }



// // !QUESTION 16

// var uni = "University of Karachi"
// arr = uni.split("");


// for (var k=0; k<arr.length; k++){
// document.write(arr[k] + "<br>");
// }


// // !QUESTION 17

// var input = prompt("Enter a city name");

// arr=input.split(",")
// lastInput = input[input.length - 1];
// document.write(lastInput);


//  // !QUESTION 17
// let str1 = "The quick brown fox jump over the lazy dog";

// str1=str1.toLowerCase();
// let wordCount ="the";

// let count = str1.split(wordCount).length -1;
// document.write("Sentense" + str1);
// document.write("<br>");
// document.write("there are " + count +" occurence(s) of the word " + "'"+ wordCount +"'");
