//store an object ----local storage, session storage

//*****web storage API is a mechanicism that allows you to store key-value-pairs
//local storage is useful for storing data thta should be avialble across browser sessions, such as user preference
//Session storage is useful for storing temporary data that should be eaccessible during ther lifetime of the current browser session.
//features:
//key value pairs : meaning storing the data in an object-like format.
//Synchronous: storing data as it apears
//same origin policy

//setItem() to save data into LS 
//getItem() to retrieve data from LS 
//removeItem() to remove item
//clear() clears all data from the LS.

localStorage.setItem("myObject", JSON.stringify({name:"Emmy", age: 20}));

localStorage.removeItem("object")
localStorage.clear()


const storeObject = JSON.parse(localStorage.getItem("myObject"));
console.log(storeObject)


const word = document.getElementsByClassName("demon")


word[0].innerHTML= "Hello World!"
word[1].innerHTML= "Hello World!"





const person = {name:"emily", age:20};
localStorage.setItem("myObject", JSON.stringify(person))


const storeObjects = JSON.parse(localStorage.getItem("myObject"));
console.log(storeObjects);

localStorage.setItem("theme", "dark")
localStorage.setItem("fontSize","10px")


console.log(localStorage.getItem("theme", "dark"));
console.log(localStorage.getItem("fontSize","10px"));

sessionStorage.setItem("formdata", JSON.stringify({name:"chapo", age:30}));

const getData = JSON.parse(sessionStorage.getItem("formdata"));

console.log(getData.name)