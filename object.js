//1) make a Rectangle class that stores width and Height.

var Rectangle = function(width,height) //declaring object with "constructor function"
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is : " +this.width * this.height);
    }
} 
 //calling objectsintances
var myRect1 = new Rectangle(80,90);
var myRect2 = new Rectangle(60,70);
var myRect3 = new Rectangle(40,50);
var myRect4 = new Rectangle(20,30);

console.log(myRect1.width); //calling objects' properties
console.log(myRect1.height);
myRect1.area();
console.log("---------------------");
//document.write(myRect1.width);
//document.write(myRect1.height);
console.log(myRect2.width); //calling objects' properties
console.log(myRect2.height);
myRect2.area();
console.log("---------------------")
console.log(myRect3.width); //calling objects' properties
console.log(myRect3.height);
myRect3.area();
console.log("---------------------")
console.log(myRect4.width); //calling objects' properties
console.log(myRect4.height);
myRect4.area();
console.log("---------------------")




//2) Adding getArea method using prototype property
Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype property : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRect1.getArea(); //calling method which is created using prototype property
myRect2.getArea();
myRect3.getArea();
myRect4.getArea();


//3) Assuming that the Rectangle contructor takes a width and height, why does the following output 20 instead of 200?
//this keyword is used to differentiate between Global var and Local Var.

Rectangle.prototype.getAreaForRect = function(width,height)  //this is because of Global scope and LOcal scope.
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(4,5); //calling method which is created using prototype property
myRect2.getAreaForRect(5,6);
myRect3.getAreaForRect(7,8);
myRect4.getAreaForRect(11,2);


//4) make a variable whose value is an object with firstName and lastName properties
var obj = {
    firstName : "Jami",
    lastName : "Mutyalarao"
};
console.log(obj);

//5) try reading the middleName from a property by assigning to it.

var obj1 = {
    firstName : "Jami",
    middleName : "Mutyala",
    lastName : "Rao"
};
console.log(obj1);


//6)Create a string with what looks like an object with firstName and lastName,use eval() property.

var myString = new String('2 + 2')
eval(myString.toString());
console.log(eval(myString.toString()));

//8) Creating a Person dynamic object
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1 = new Person("Jami","Mutyalarao",63,['java','.net','power BI'],"29/04/1997",{city:"visakhapatnam",pincode:530078},"false","Software-AnalystA4");
Person2 = new Person("Sai","Vasanth",3,["python","Network Testing"],"19/04/1998",{city:"Hyderbad",pincode:520058},"false","Testing Engineer");

console.log(Person1);
console.log(Person2);

print=function()    
{
    console.log(Person1);
    console.log(Person2);
}();

//10) Bank Account Application

function Account(accountNumber,accountHolderName,accountBalance) 
{
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}
function Savings(isSalary,accountNumber,accountHolderName,accountBalance)
{
    this.isSalary = isSalary;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(this.accountBalance > 0 && this.accountBalance < 100)
        {
            console.log("Insuffient balance! You have less than 100 rs.");
        } 
        if((this.accountBalance >= 100 && this.accountBalance <= 500) && amount === 200)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 500 && this.accountBalance <= 5000) && amount === 500 || amount === 2000);
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 5000) && amount === 200 || amount === 500 || amount ===2000)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if(this.accountBalance <= 0)
        {
            console.log("ATM says! I cant give you the money, Please deposit some amount to withdraw later, Now Please goo!");
        }
      
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
}
function Current(odLimit,accountNumber,accountHolderName,accountBalance)
{
    this.odlimit = odlimit;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(odlimit > 500)
        {
            if((this.accountBalance > 500 && this.accountBalance < 2000) && amount === 200 || amount === 500)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
            if((this.accountBalance > 2000) && amount === 200 || amount === 500 || amount === 2000)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
        } 
        else
        {  
            console.log("Your odLimit for Current acocunt is less than 500");
        }  
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
       
}

var obj1 = new Account(134322,"Mutyalarao",636363);
console.log(obj1);
var Savings = Object.create(Account); //inheriting the common properties
var Current = Object.create(Account); 

var objSavings = new Savings("true",81254,"Vasanth",333345); //creating Savings object
console.log(objSavings);
console.log(objSavings.withdraw(500));
console.log(objSavings.getCurrentBalance());

var objCurrent = new Current(7070,7680979,"Bindhu",652147); //creating Current object
console.log(objCurrent);
console.log(objCurrent.withdraw(2000));
console.log(objCurrent.getCurrentBalance());

var objSavings = new Savings("true",7416935,"Devi",789456); //creating Savings object
console.log(objSavings);
console.log(objSavings.withdraw(500));
console.log(objSavings.getCurrentBalance());

