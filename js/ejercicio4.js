const estudiantes = [
    {
        nombre: "Ana Torres",
        edad: 14,
        curso: "9A"
    },
    {
        nombre: "Mateo Ruiz",
        edad: 15,
        curso: "10B"
    },
    {
        nombre: "Lucía Gómez",
        edad: 13,
        curso: "8A"
    },
    {
        nombre: "Samuel Díaz",
        edad: 16,
        curso: "11A"
    },
    {
        nombre: "Valentina Cruz",
        edad: 14,
        curso: "9B"
    },
    {   nombre: "Leonardo Soto",
        edad: 33,
        curso: "3G"
    },
  
















];

const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");
const ficha = document.getElementById("ficha");

function normalizarNombre(nombre) {
    return nombre
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("es");
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombreBuscado = normalizarNombre(inputNombre.value);
    const estudiante = estudiantes.find(
        (registro) => normalizarNombre(registro.nombre) === nombreBuscado
    );

    ficha.hidden = true;

    if (!estudiante) {
        mensaje.textContent = "No se encontró un estudiante con ese nombre.";
        return;
    }

    document.getElementById("ficha-nombre").textContent = estudiante.nombre;
    document.getElementById("ficha-edad").textContent = `${estudiante.edad} años`;
    document.getElementById("ficha-curso").textContent = estudiante.curso;

    mensaje.textContent = "";
    ficha.hidden = false;
});