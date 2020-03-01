var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".form-feedback");
var close = popup.querySelector(".closebtn");
var login = popup.querySelector("[name=Name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=comment]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
if (storage) {
login.value = storage;
email.focus();
}
else {
login.focus();
}
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt) {
if (!login.value || !email.value || !text.value) {
evt.preventDefault();
popup.classList.remove("modal-error");
popup.offsetWidth = popup.offsetWidth;
popup.classList.add("modal-error");
} else {
if (isStorageSupport) {
  localStorage.setItem("login", login.value);
}
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (popup.classList.contains("modal-show")) {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");

}
}
});
