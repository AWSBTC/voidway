document.querySelectorAll(".lore-reactions").forEach(group => {
  const artId = group.dataset.artId;
  const saved = localStorage.getItem("reaction-" + artId);

  if (saved) {
    const btn = group.querySelector(`[data-reaction="${saved}"]`);
    if (btn) btn.classList.add("active");
  }

  group.querySelectorAll(".reaction").forEach(button => {
    button.addEventListener("click", () => {
      group.querySelectorAll(".reaction").forEach(b =>
        b.classList.remove("active")
      );

      button.classList.add("active");
      localStorage.setItem(
        "reaction-" + artId,
        button.dataset.reaction
      );
    });
  });
});
