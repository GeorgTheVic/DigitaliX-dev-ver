document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      dropdownMenu.classList.remove("show");
    }
  });

  const options = dropdownMenu.querySelectorAll("li");
  options.forEach(option => {
    option.addEventListener("click", () => {
      dropdownToggle.textContent = option.textContent;
      dropdownMenu.classList.remove("show");
    });
  });
});