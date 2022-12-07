//Datatypes in Computer Languages
var text = "Hello world"; //String
var number = 42; //Integer
var char = "@";
var degree = 50.16; //float
var isHungry = true; //Boolean False or True
var students = [
    "Enzo",
    "Jenny",
    "Patricia",
    "Hannatu",
    "Ivan"
]

// Backend Commands
console.log("hello world")
console.warn(text + " " + degree + " " + isHungry)
console.info(students[2] + " " + students[4])

//Frontend Commands
alert("The answer for everything is number: " + number);

//To Do List Functions
//1 usage
function AddTodo() {
    console.log("started the AddTodo function");
    //Extraxting the text aka. value of the input field
    var fieldValue = document.querySelector(".myinput").value;
    console.log(fieldValue);
    if (fieldValue !== " ") {

    } else {
        alert("can't add empty todo")
    }
}

//variable newListItem, will create an empty ListItem aka. li everytime the function is triggerd

//append the 2D Text that was converted into a textnode to the empty listitem


// when the text has been extracted, converted into a 2D modul with textNode and packed into an emtpy ListItem, then we can assign that ListItem with its TextNode as a child of the unordered list in html.

//   resetting the input field after successfully adding a todoItem
