const entrada = [
  "Vander",
  "Marcela",
  "Nielon",
  "Diogo",
  "Eduardo",
  "Henrique",
  "Lydia",
  "Yasmin",
  "Guilherme",
  "Anthony",
  "Thalles",
  "Mariana",
  "Abraão",
  "Erika",
];

const getSpan = document.getElementById("d1");

entrada.map((e) => {
  const novoParagrafo = document.createElement("p");
  novoParagrafo.textContent = e;
  getSpan.appendChild(novoParagrafo);
});
