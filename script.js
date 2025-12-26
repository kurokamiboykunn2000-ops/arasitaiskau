const search = document.getElementById("commandSearch");
const commands = document.querySelectorAll(".command-item");

search.addEventListener("input", () => {
  const q = search.value.toLowerCase();

  commands.forEach(cmd => {
    const hit = cmd.textContent.toLowerCase().includes(q);
    cmd.style.display = hit ? "block" : "none";
  });
});