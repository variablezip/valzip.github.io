const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/tkmiz.png") {
    myImage.setAttribute("src", "images/glegle.png");
  } else {
    myImage.setAttribute("src", "images/tkmiz.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    let myName = "Robot";
    localStorage.setItem("name", myName);
    myHeading.textContent = `Turtles are cool, ${myName}`;
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Turtles are cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = `Turtles are cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  localStorage.clear("name");
  setUserName();
});
