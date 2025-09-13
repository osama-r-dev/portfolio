function init() {
  const toHomeButton = document.getElementById("toHomeButton");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      toHomeButton.style.display = "block";
    } else {
      toHomeButton.style.display = "none";
    }
  });

  toHomeButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

document.addEventListener("click", init);
