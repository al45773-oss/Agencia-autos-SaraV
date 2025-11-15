function mostrarCotizacion(){
const f = document.getElementById("formCotizacion");
const extras = Array.from(f.querySelectorAll('input[name="extra"]:checked'))
.map(e => e.value).join(', ');


document.getElementById("resultado").innerHTML = `
<p>Nombre: ${f.nombre.value}</p>
<p>Correo: ${f.correo.value}</p>
<p>Financiamiento: ${f.fin.value}</p>
<p>Extras: ${extras}</p>
<p>Marca seleccionada: ${f.marca.value}</p>
`;
}