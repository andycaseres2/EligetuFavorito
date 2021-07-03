const butonBarsa = document.getElementById("barsa");
const butonReal = document.getElementById("real");

butonBarsa.addEventListener("click", (e) => {
  alert("EXCELENTE ELECCION.. SABES LO QUE QUIERES");
});

butonReal.addEventListener("mousemove", (e) => {
  const x = Math.round(Math.random() * 93);
  const y = Math.round(Math.random() * 93);

  butonReal.style.left = x + "%";
  butonReal.style.top = y + "%";
});
