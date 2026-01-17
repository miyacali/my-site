document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("nameSwitch");
  if (!el) return;

  const variants = ["Xinyi", "欣奕"];
  let index = 0;

  el.addEventListener("mouseenter", () => {
    el.textContent = variants[index];
    index = (index + 1) % variants.length; // 交替
  });

  el.addEventListener("mouseleave", () => {
    el.textContent = "Sissi";
  });
});