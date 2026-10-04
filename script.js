const ACCESS_CODE = "7410";

const SECRET_MESSAGE = [
  "Hola, Denis. Espero que tu día vaya de maravilla.",
  "",
  "Es raro que quizás te escriba y tú digas: ¿Este man qué? Jaja. Pero solo quería decirte que, desde el día en que te conocí en la ruta, eras la chica más tierna y bonita que había conocido en su momento.",
  "",
  "Hoy, como cinco años después, te confieso que pasan los años y tú simplemente sigues siendo tú: bonita, tierna y especial.",
  "",
  "Más de una vez te he visto, pero pues yo no soy tan sociable. Por favor, te pido que no le cuentes a nadie de este mensaje.",
  "",
  "Espero que te haya sorprendido esta forma de escribirte. Quería que fuera algo especial porque tú lo mereces.",
  "",
  "Esperaba algún día poder salir a comer un heladito, aunque creo que ya no se puede. Por eso hoy tomé el valor de decirte esto.",
  "",
  "Me siento afortunado de saber que eres aún más linda en persona que en las fotos. Quizás soy como tu admirador a la distancia, pero a veces es en la distancia donde más piensas en alguien.",
  "",
  "Sé que puede parecer raro. Solo quería que lo supieras. ❤️"
].join("\n");

const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const access = document.getElementById("access");
const after = document.getElementById("after");
const form = document.getElementById("form");
const code = document.getElementById("code");
const error = document.getElementById("error");
const reveal = document.getElementById("reveal");
const close = document.getElementById("close");

if (
  envelope &&
  message &&
  access &&
  after &&
  form &&
  code &&
  error &&
  reveal &&
  close
) {
  reveal.addEventListener("click", () => {
    code.type = code.type === "password" ? "text" : "password";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (code.value.trim() !== ACCESS_CODE) {
      error.textContent = "Esa no es la clave. Inténtalo de nuevo 💌";
      code.focus();
      code.select();
      return;
    }

    error.textContent = "";
    message.textContent = SECRET_MESSAGE;
    message.scrollTop = 0;

    envelope.classList.add("open");
    access.classList.add("hidden");

    window.setTimeout(() => {
      after.classList.remove("hidden");
      message.scrollTop = 0;
    }, 950);
  });

  code.addEventListener("input", () => {
    error.textContent = "";
  });

  close.addEventListener("click", () => {
    after.classList.add("hidden");
    envelope.classList.remove("open");
    access.classList.remove("hidden");

    code.value = "";
    code.type = "password";
    message.textContent = "";
    message.scrollTop = 0;
    error.textContent = "";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
} else {
  console.error(
    "No se encontraron todos los elementos necesarios. Revisa los IDs del HTML."
  );
}