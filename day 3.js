const id= prompt("enter your email id");
const pass= prompt("enter your password:");
if (id=="stu@letsupgrade.com" && pass=="1234"){
console.log("you are now logged in");
} else {
console.log("try again");
}

//using ternary operation
id=="stu@letsupgrade.com"?(pass=="1234"?(alert("you are now logged in"):alert("wrong password")):alert("wrong emailid"))
