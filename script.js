/*
  PERSONALIZA ESTAS DOS CONSTANTES EN TU COMPUTADOR.
  Nota: en una página estática, el código y el mensaje pueden inspeccionarse
  en el navegador. Esto evita que el mensaje se vea en la vista previa, pero
  NO es seguridad real ni un enlace de un solo uso.
*/
const ACCESS_CODE = "CAMBIA-ESTE-CODIGO";
const SECRET_MESSAGE = `Escribe tu mensaje secreto aquí.
Puedes usar varias líneas.`;

const envelope = document.getElementById("envelope");
const input = document.getElementById("accessCode");
const error = document.getElementById("error");
const gate = document.getElementById("gate");
const after = document.getElementById("after");
const message = document.getElementById("letterMessage");

document.getElementById("openLetter").addEventListener("click", openLetter);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") openLetter();
});
document.getElementById("revealCode").addEventListener("click", () => {
  input.type = input.type === "password" ? "text" : "password";
});
document.getElementById("closeLetter").addEventListener("click", () => {
  envelope.classList.remove("open");
  after.classList.add("hidden");
  gate.classList.remove("hidden");
  input.value = "";
  error.textContent = "";
});

function openLetter() {
  if (input.value.trim() !== ACCESS_CODE) {
    error.textContent = "Ese código no abre la carta. Inténtalo otra vez.";
    input.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-5px)" },
       { transform: "translateX(5px)" }, { transform: "translateX(0)" }],
      { duration: 220 }
    );
    return;
  }
  error.textContent = "";
  message.textContent = SECRET_MESSAGE;
  envelope.classList.add("open");
  window.setTimeout(() => {
    gate.classList.add("hidden");
    after.classList.remove("hidden");
  }, 850);
}
