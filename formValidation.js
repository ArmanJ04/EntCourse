function validateForm(event) {
    event.preventDefault();
    var contactName = document.getElementById("contactName");
    var contactSurname = document.getElementById("contactSurname");
    var contactNumber = document.getElementById("contactNumber");
    var contactEmail = document.getElementById("contactEmail");
    var contactMessage = document.getElementById("contactMessage");

    if (contactName.value.trim() === "") {
        alert("Өтінемін, Атыңызды жазыңыз!");
        return;
    }
    
    if (contactSurname.value.trim() === "") {
        alert("Өтінемін, Жөніңізді жазыңыз!");
        return;
    }
    
    if (contactNumber.value.trim() === "") {
        alert("Өтінемін, номеріңізді жазыңыз!");
        return;
    }
    
    if (contactEmail.value.trim() === "") {
        alert("Өтінемін, почтаңызды жазыңыз!");
        return;
    }
    
    if (contactMessage.value.trim() === "") {
        alert("Өтінемін, таңдау пәндерді жазыңыз!");
        return;
    }
    
    document.querySelector(".contactForm").submit();
}

document.querySelector(".contactForm").addEventListener("submit", validateForm);