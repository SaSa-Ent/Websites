"use strict";
// ----------------------------------------------------------------------
/**
 * add event on element
 */
// ----------------------------------------------------------------------
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};
// ----------------------------------------------------------------------
/**
 * toggle navbar
 */
// ----------------------------------------------------------------------

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

// ----------------------------------------------------------------------
/**
 * header active
 */
// ----------------------------------------------------------------------

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// ----------------------------------------------------------------------
// #Technologies We Work With
// ----------------------------------------------------------------------

const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    const contentId = tab.innerText.toLowerCase();
    const content = document.getElementById(contentId);
    const contents = document.querySelectorAll(".content");
    contents.forEach((content) => content.classList.remove("active"));
    content.classList.add("active");
  });
});

// ----------------------------------------------------------------------
// **
// form vialidation
// **
// ----------------------------------------------------------------------
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validatePhoneNumber(phone) {
  // You can customize the phone number validation based on your requirements
  // This is a simple example that checks if the phone number has at least 10 digits
  const phoneRegex = /^\d{10,}$/;
  return phoneRegex.test(phone);
}

function submitForm() {
  var form = document.getElementById("myForm");

  // Validate name, email, and message (assuming these are required)
  var name = form.elements["name"].value;
  var email = form.elements["email_address"].value;
  var message = form.elements["message"].value;

  if (!name || !email || !message) {
    document.getElementById("responseMessage").innerText =
      "Please fill out all required fields.";
    return;
  }
  if (!validateEmail(email)) {
    document.getElementById("responseMessage").innerText =
      "Please enter a valid email address.";
    return;
  }
  // Validate phone number
  var phone = form.elements["phone"].value;
  if (phone && !validatePhoneNumber(phone)) {
    document.getElementById("responseMessage").innerText =
      "Please enter a valid phone number.";
    return;
  }
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById("responseMessage").innerText =
        "Thanks! We'll be in touch with you shortly!";
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
}

// ------------------------------------------------------------------------
// process script
// ------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    item.addEventListener("click", function () {
      accordionItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      this.classList.toggle("active");
    });
  });
});
