document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  document.body.appendChild(tooltip);

  const buttons = document.querySelectorAll(".col");

  buttons.forEach(button => {
    button.addEventListener("mouseover", (e) => {
      const text = button.dataset.tooltip;
      tooltip.textContent = text;
      tooltip.classList.add("show");
    });

    button.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY + 10 + "px";
    });

    button.addEventListener("mouseout", () => {
      tooltip.classList.remove("show");
    });
  });
});
