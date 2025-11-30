function sendReset() {
    let email = document.getElementById("email").value;

    if (email.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    alert("If this email exists, a reset link was sent.");
}
