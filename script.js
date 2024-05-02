const userEmail = document.getElementById("user-email");
const submitBtn = document.getElementById("submitBtn");
const showMail = document.getElementById("user-mail");
const hideCard = document.querySelector(".card");
const showMsg = document.getElementById("show-msg");
const erroR = document.getElementById("Error");

submitBtn.addEventListener("click", validateEmail);
function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userEmail.value)) {
    userEmail.classList.add("notValid");
    userEmail.classList.remove("valid");
    erroR.classList.remove("error");
    userEmail.style.border = "1px solid red";
  } else {
    userEmail.classList.add("valid");
    userEmail.classList.remove("notValid");
    erroR.classList.add("error");
    userEmail.style.border = "none";
  }
  if (userEmail == "") {
    userEmail.classList.add("notValid");
    userEmail.classList.remove("valid");
    erroR.classList.remove("error");
    userEmail.style.border = "1px solid red";
  }
}
submitBtn.addEventListener("click", isValidEmail);
function isValidEmail() {
  if (userEmail.classList.contains("valid")) {
    let successMail = document.querySelector(".input-style").value;
    let openMail = document.querySelector(".mail");
    openMail.innerHTML = successMail;
    hideCard.style.display = "none";
    showMsg.classList.remove("hide");
  }
}
