function validateForm(event) {
    event.preventDefault();
    var contactName = document.getElementById("contactName");
    var contactSurname = document.getElementById("contactSurname");
    var contactNumber = document.getElementById("contactNumber");
    var contactEmail = document.getElementById("contactEmail");
    var contactMessage = document.getElementById("contactMessage");

    if (!/^[A-Za-z]+$/.test(contactName.value)) {
        alert("Өтінемін, Атыңызды тек әріптерден тұратын сөздермен жазыңыз!");
        return;
    }
    
    if (!/^[A-Za-z]+$/.test(contactSurname.value)) {
        alert("Өтінемін, Жөніңізді тек әріптерден тұратын сөздермен жазыңыз!");
        return;
    }
    
    if (!/^\d+$/.test(contactNumber.value)) {
        alert("Өтінемін, номеріңіз тек сандардан тұруы керек!");
        return;
    }
    
    if (contactEmail.value.trim() === "") {
        alert("Өтінемін, почтаңызды жазыңыз!");
        return;
    } else if (!isValidEmail(contactEmail.value)) {
        alert("Өтінемін, дұрыс пошта мекенжайын енгізіңіз!");
        return;
    }
    
    if (contactMessage.value.trim() === "") {
        alert("Өтінемін, таңдау пәндерді жазыңыз!");
        return;
    }
    
    document.querySelector(".contactForm").submit();
}

function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

document.querySelector(".contactForm").addEventListener("submit", validateForm);
