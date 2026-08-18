
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card[data-category]");
filters.forEach(btn => btn.addEventListener("click", () => {
  filters.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const f = btn.dataset.filter;
  cards.forEach(card => {
    card.style.display = (f === "all" || card.dataset.category.split(" ").includes(f)) ? "" : "none";
  });
}));
