// Array declaration for multiple objects 
var empDetails =[
{name:"Nagaraju Kukudala",age:25,salary:"25,000",address:{city:"Hyderabad", state:"Telangana",pincode:"500095"}} ,
{name1:"Kittu",age1:24 ,salary1:"25,000" ,address1: {city1:"Hyderabad", state1:"A.P.",pincode1:"500001" }} ,
{name2:"Raju",age2:28 ,salary2:"55,000" ,address2: {city2:"Warangal", state2:"Telangana",pincode2:"501510" }} ,
{name3:"Amith",age3:36 ,salary3:"2,000" ,address3: {city3:"Lucknow", state3:"U.P.",pincode3:"555555" }} ,
{name4:"Sonu",age4:26 ,salary4:"20,000" ,address4: {city4:"Ranga Reddy", state4:"Telangana",pincode4:"222222" }}
        
                ];
     // Multiple Objects


myDetails();// Calling myDetails function
// function for Console.log
function myDetails(){
console.log("Name :" + empDetails[2].name2);  // prints Name on Console
console.log("Age :" + empDetails[2].age2);     // prints Age on Console
console.log("Salary :" + empDetails[2]["salary2"]);   // prints Salary on Console
console.log("City :" + empDetails[2].address2["city2"]);  // prints City on Console
console.log("State :" + empDetails[2].address2["state2"]);  // prints State on Console
console.log("pincode :" + empDetails[2].address2["pincode2"]);  // prints Pincode on Console
    

    /* Console.log functions for printing name, 
    age, salary and address with city , state and pincode*/
 }