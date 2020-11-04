const myHeading = document.querySelector('h2');
myHeading.textContent = 'How are you Jason?';

let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'imgs/RamzaCh.1.png')
    {
        myImage.setAttribute('src', 'imgs/RamzaCh.2.jpg');
    }
    else
    {
        myImage.setAttribute('src', 'imgs/RamzaCh.1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() 
{
    let myName = prompt('Please enter your name: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to this website, ' + myName;
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage('name');
    myHeading.textContent = 'Welcome to this website, ' + storedName;
}

myButton.onclick = function()
{
    setUserName();
}