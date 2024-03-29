// const windowWidth = window.innerWidth;

// const largerScreen = windowWidth > 2500;

// if (largerScreen) {
//   const tlConLarger = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#contact",
//       scrub: true,
//       pin: true,
//       start: "top top",
//       end: "+=100%",
//     },
//   });

//   tlConLarger.fromTo(".mountain1", { x: 2000, y: 300, autoAlpha: 1 }, { x: 152, y: 245, autoAlpha: 1, duration: 1 }, 0)
//     .fromTo(".mountain2", { x: -2500, y: 300, autoAlpha: 1 }, { x: -170, y: 245, autoAlpha: 1, duration: 1 }, 0)
//     .fromTo(".mountain3", { x: 2000, y: 300, autoAlpha: 1 }, { x: 152, y: 245, autoAlpha: 1, duration: 1 }, 1)
//     .fromTo(".mountain4", { x: 0, y: 1800, autoAlpha: 1 }, { x: 0, y: 245, autoAlpha: 1, duration: 1.5 }, 2)
//     .fromTo(".cardCon", { x: 0, y: 1500, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.5 }, 3);
// } else {
//   const tlConSmaller = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#contact",
//       scrub: true,
//       pin: true,
//       start: "top top",
//       end: "+=100%",
//     },
//   });

//   tlConSmaller.fromTo(".mountain1", { x: 1000, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 0)
//     .fromTo(".mountain2", { x: -1500, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 0)
//     .fromTo(".mountain3", { x: 1000, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 1)
//     .fromTo(".mountain4", { x: 0, y: 1200, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.5 }, 2)
//     .fromTo(".cardCon", { x: 0, y: 1000, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.5 }, 3);
// }

const tlCon = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
  },
});

tlCon.fromTo(".mountain2", { x: -1000, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 0)
  .fromTo(".mountain1", { x: 1000, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 0)
  .fromTo(".mountain3", { x: 1000, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 1)
  .fromTo(".mountain4", { x: 0, y: 1200, autoAlpha: 1 }, { x: 0, y: 245, autoAlpha: 1, duration: 1.5 }, 2)
  .fromTo(".cardCon", { x: 0, y: 1000, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.5 }, 3);


function sendEmail() {
  const name = document.getElementById("flname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // send email
  emailjs.send("service_n24zpgf", "template_t0u589q", {
    from_name: name,
    from_email: email,
    message: message
  }, "lkTiNeBJnYgig71GS")
    .then(function (response) {
      console.log("Email sent successfully!", response.status, response.text);
      // show success message and clear form
      alert("Your message has been sent. Thank you!");
      document.getElementById("flname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      // remove validation classes
      document.getElementById("flname").classList.remove("red", "green");
      document.getElementById("email").classList.remove("red", "green");
      document.getElementById("message").classList.remove("red", "green");
    }, function (error) {
      console.error("Email failed to send.", error);
      // show error message
      alert("Sorry, there was a problem sending your message. Please try again later.");
    });
}



function validateName() {
  const name = document.getElementById("flname");
  if (name.value == "") {
    name.classList.add("red");
    name.classList.remove("green");
  } else {
    name.classList.remove("red");
    name.classList.add("green");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email.value)) {
    email.classList.add("red");
    email.classList.remove("green");
  } else {
    email.classList.remove("red");
    email.classList.add("green");
  }
}

function validateMessage() {
  const message = document.getElementById("message");
  if (message.value == "") {
    message.classList.add("red");
    message.classList.remove("green");
  } else {
    message.classList.remove("red");
    message.classList.add("green");
  }
}

function validateForm() {
  // Get form values
  const name = document.getElementById("flname");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  
  // Validate name
  if (name.value.trim().length < 2 || name.value.trim()[0] === " ") {
    name.classList.add("red");
    name.classList.remove("green");
    return false;
  } else {
    name.classList.remove("red");
    name.classList.add("green");
  }
  
  // Validate email format
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add("red");
    email.classList.remove("green");
    return false;
  } else {
    email.classList.remove("red");
    email.classList.add("green");
  }

  // Validate message
  if (message.value.trim() === "") {
    message.classList.add("red");
    message.classList.remove("green");
    return false;
  } else {
    message.classList.remove("red");
    message.classList.add("green");
  }
  
  return true;
}


// add event listeners to input elements for shake animation
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("animationend", function () {
    input.classList.remove("shake");
  });
});

// add event listeners to input elements for validation
inputs.forEach((input) => {
  input.addEventListener("blur", validateForm);
  input.addEventListener("input", function () {
    input.classList.remove("red");
    input.classList.remove("green");
    input.classList.remove("shake");
  });
});


// add event listeners to input fields
document.getElementById("flname").addEventListener("input", validateName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("message").addEventListener("input", validateMessage);

// add event listener to form submit event
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting normally
  if (validateForm()) {
    sendEmail(); // call sendEmail function to send the email if the form is valid
  }
});
