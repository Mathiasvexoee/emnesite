document.querySelectorAll(".like").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("fill");
  });
});
