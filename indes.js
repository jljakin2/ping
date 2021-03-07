const email = document.querySelector(".email");
const error = document.querySelector("small");

email.addEventListener("invalid", (event) => {
  event.preventDefault();

  email.classList.add("show-error--border");
  error.classList.add("show-error");
});

email.addEventListener("keydown", () => {
  email.classList.remove("show-error--border");
  error.classList.remove("show-error");
});
