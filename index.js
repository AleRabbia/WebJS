
function encontrarMayor() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
        let mayor = Math.max(num1, num2, num3);
        document.getElementById("resultado").textContent = "El mayor de los tres números es: " + mayor;
    } else {
        document.getElementById("resultado").textContent = "Por favor, asegúrese de ingresar tres números distintos.";
    }
}


function verificarNumero() {
    let numero = parseInt(document.getElementById("numero").value);

    if (numero > 0) {
        document.getElementById("resultadoNumero").textContent = "El número es positivo.";
    } else if (numero === 0) {
        document.getElementById("resultadoNumero").textContent = "El número es cero.";
    } else {
        document.getElementById("resultadoNumero").textContent = "El número es negativo.";
    }
}

function calcularNivel() {
    let nombre = document.getElementById("nombre").value;
    let totalPreguntas = parseInt(document.getElementById("totalPreguntas").value);
    let preguntasCorrectas = parseInt(document.getElementById("preguntasCorrectas").value);

    let porcentajeCorrectas = (preguntasCorrectas / totalPreguntas) * 100;
    let nivel;

    if (porcentajeCorrectas >= 90) {
        nivel = "Nivel superior";
    } else if (porcentajeCorrectas >= 75) {
        nivel = "Nivel medio";
    } else if (porcentajeCorrectas >= 50) {
        nivel = "Nivel regular";
    } else {
        nivel = "Fuera de nivel";
    }

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>Nombre: ${nombre}</p><p>Porcentaje de respuestas correctas: ${porcentajeCorrectas.toFixed(2)}%</p><p>Nivel: ${nivel}</p>`;
}

function mostrarDatos() {
    let confirma = confirm('Esta sedguro?')
    if (confirma) {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let domicilio = document.getElementById("domicilio").value;
        let curso = document.getElementById("curso").value;
        let carrera = document.getElementById("carrera").value;
        let materia = document.getElementById("materia").value;
        let nota = parseInt(document.getElementById("nota").value);

        let resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `
        <h2>Datos del Alumno:</h2>
        <p>Nombre: ${nombre}</p>
        <p>Apellido: ${apellido}</p>
        <p>Domicilio: ${domicilio}</p>
        <p>Curso: ${curso}</p>
        <p>Carrera: ${carrera}</p>
        <p>Materia: ${materia}</p>
        <p>Nota primer parcial: ${nota}</p>
    `;
        alert("Carga Exitosa" + nombre)
    }

}