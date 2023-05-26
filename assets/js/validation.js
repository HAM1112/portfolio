const formName = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("submit-form");
const subject = document.getElementById("subject");
const formMessage = document.getElementById("message");
const errorEl = document.getElementById("error");

function containsNumbers(str) {
  return /\d/.test(str);
}

form.addEventListener("submit", (e) => {
  let message = [];
  if (Array.from(formName.value)[0] === ' ' || formName.value == null) {
    message.push("value");
    alert("Name is required");
}

if (containsNumbers(formName.value) == true) {
    message.push("value");
    //alert("Name shouldn't contain numbers");
    errorEl.innerHTML = `Name shouldn't contain numbers`
    console.log("Name shouldn't contain numbers");
    
}

if (Array.from(email.value)[0] === ' ' || email.value == null) {
    message.push("value");
    alert("Email is required");
    errorEl.innerHTML = `Email is required`
}

if (Array.from(subject.value)[0] === ' ' || subject.value == null) {
    message.push("value");
    alert("Subject is required");
    errorEl.innerHTML = `Subject is required`
}

if (Array.from(formMessage.value)[0] === ' ' || formMessage.value == null) {
    message.push("value");
    alert("Message is required");
    errorEl.innerHTML = `Message is required`
  }

  if (message.length > 0) {
    e.preventDefault();
  } else {
    //submition
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxfhF6c5Xs21m-9oerkc3Mu9DJW27sF616_9SDn2tf5Jh6zaz3YWnumPfMDDaw_CtC5nQ/exec",
        data:$(form).serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error");
            },
        });
        }
    });
