function calcular_coste() {
  var num_noches = document.getElementById("n_noches").value;
  var destino = document.getElementById("ciudad_destino").value;

  var resultado1 = coste_hotel(num_noches);
  var resultado2 = coste_avion(destino);
  var resultado3 = coste_alquiler_coche(num_noches);
  var resultado_total = resultado1 + resultado2 + resultado3;

  // Formatear el resultado como moneda
  document.getElementById("result").value = formato_moneda(resultado_total);
}

function coste_hotel(n) {
  var coste_estancia = n * 140000;
  return coste_estancia;
}

function coste_avion(ciudad) {
  switch (ciudad) {
    case "medellin":
      return 400000;
    case "cartagena":
      return 800000;
    case "bogota":
      return 300000;
    case "armenia":
      return 600000;
    default:
      return 0; // Para manejar casos no especificados
  }
}

function coste_alquiler_coche(n) {
  var coste = n * 40000; // Cambié 40 a 40000 para que sea en la misma unidad de moneda
  if (n > 7) {
    coste -= 50000;
  } else if (n > 3) {
    coste -= 20000;
  }
  return coste;
}

function formato_moneda(cantidad) {
  return "$" + cantidad.toLocaleString("es-CO"); // Formato para Colombia (es-CO)
}
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
});

window.addEventListener("load", function () {
  let loadElements = document.querySelectorAll(".show-on-load");
  loadElements.forEach(function (el) {
    el.classList.add("active");
  });
});
