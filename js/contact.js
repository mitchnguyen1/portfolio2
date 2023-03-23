const windowWidth = window.innerWidth;

const largerScreen = windowWidth > 2500;

if (largerScreen) {
  const tlConLarger = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  tlConLarger.fromTo(".mountain1", { x: 2000, y: 300, autoAlpha: 1 }, { x: 152, y: 245, autoAlpha: 1, duration: 1 }, 0)
    .fromTo(".mountain2", { x: -2500, y: 300, autoAlpha: 1 }, { x: -170, y: 245, autoAlpha: 1, duration: 1 }, 0)
    .fromTo(".mountain3", { x: 2000, y: 300, autoAlpha: 1 }, { x: 152, y: 245, autoAlpha: 1, duration: 1 }, 1)
    .fromTo(".mountain4", { x: 0, y: 1800, autoAlpha: 1 }, { x: 0, y: 245, autoAlpha: 1, duration: 1.5 }, 2)
    .fromTo(".cardCon", { x: 0, y: 1500, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.5 }, 3);
} else {
  const tlConSmaller = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  tlConSmaller.fromTo(".mountain1", { x: 1000, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 0)
    .fromTo(".mountain2", { x: -1500, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 0)
    .fromTo(".mountain3", { x: 1000, y: 150, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1 }, 1)
    .fromTo(".mountain4", { x: 0, y: 1200, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.5 }, 2)
    .fromTo(".cardCon", { x: 0, y: 1000, autoAlpha: 1 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.5 }, 3);
}

function sendEmail() {
  const name = document.getElementById("flname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // send email
  emailjs.send("service_n24zpgf", "template_t0u589q", {
    from_name: name,
    from_email: email,
    message: message
  },"lkTiNeBJnYgig71GS")
  .then(function(response) {
    console.log("Email sent successfully!", response.status, response.text);
    // show success message and clear form
    alert("Your message has been sent. Thank you!");
    document.getElementById("flname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }, function(error) {
    console.error("Email failed to send.", error);
    // show error message
    alert("Sorry, there was a problem sending your message. Please try again later.");
  });
}

// add event listener to form submit event
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting normally
  sendEmail(); // call sendEmail function to send the email
});
