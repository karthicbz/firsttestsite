let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if(mysrc === 'images/firefox-logo.jpg'){
        myImage.setAttribute('src', 'images/firefoxface.png');
    }else{
        myImage.setAttribute('src', 'images/firefox-logo.jpg');
    }
}

function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool '+myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool '+storedName;
}

myButton.onclick = function(){
    setUserName();
}