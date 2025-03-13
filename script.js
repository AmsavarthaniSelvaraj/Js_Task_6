function registerUser(){

 let userName = document.getElementById("userName").value.trim();
 let password = document.getElementById("password").value.trim();
 let confirmPassword = document.getElementById("confirmPassword").value.trim();


 if(userName === ""){
    alert(
        "Enter a username"
    );
    return;
 }
 
 if(password === ""){
    alert("Enter a password");
    return;
 }

 if(confirmPassword === ""){
    alert("Enter confirm password");
    return;
 }

 if(password !== confirmPassword){
    alert(
        "Give Correct Confirm Password"
    );
    return;
 }

    alert(
        "Sign-Up Successfully"
    );
    window.location.href="index1.html";
}

function togglePassword(inputId, eyeIcon) {
    let inputField = document.getElementById(inputId);
    if (inputField.type === "password") {
        inputField.type = "text";
    } else {
        inputField.type = "password"; 
    }
}

function sendMessage() {
    let inputField = document.getElementById("messageInput");
    let message = inputField.value.trim();

    if (message !== "") {
        document.getElementById("textMessageArea").innerHTML = message; 
        inputField.value = ""; 
    }
}

function closeChat() {
    let chatBox = document.getElementById("chatBox");
    let openBtn = document.getElementById("openBtn");

    if (chatBox) {
        chatBox.style.display = "none"; 
    }

    if (openBtn) {
        openBtn.style.display = "block"; 
    }
}

function openChat() {
    let chatBox = document.getElementById("chatBox");
    let openBtn = document.getElementById("openBtn");

    if (chatBox) {
        chatBox.style.display = "block"; 
    }

    if (openBtn) {
        openBtn.style.display = "none"; 
    }
}



function micMessage() {
    let micMessage = "If you’re looking to brighten your day, these quotes about smiling and smile quotes are your  ticket to happiness. Brighten your mood and put some extra pep in your step with these quotes designed just to put a smile on your pretty face.There are many reasons why it’s important to live life with a smile.";
    let micArea = document.getElementById("micMessageArea");
    micArea.innerHTML = ""; 

    let i = 0;
    function typeEffect() {
        if (i < micMessage.length) {
            micArea.innerHTML += micMessage.charAt(i);
            i++;
            setTimeout(typeEffect, 20); 
        }
    }
    typeEffect();
}