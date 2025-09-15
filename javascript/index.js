function exploreButton() {
    let firstName = prompt("What is your first name?");
    let lastName = prompt("What is your last name?");
    let fullName = firstName + " " + lastName;

    let h1 = document.querySelector("h1");
    h1.innerHTML =
      "Hey there " +
      fullName +
      "! Let me show you what I have been up to.. ";
  }

  let buttonElement = document.querySelector("button");
  buttonElement.addEventListener("click", exploreButton);