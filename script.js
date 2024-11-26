
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "your" && password === "mom") {
        window.location.href = "popup.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "din" && password === "mamma") {
        window.location.href = "clues.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})