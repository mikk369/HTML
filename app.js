const items = document.querySelectorAll(".item");

for (const item of items) {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
}
