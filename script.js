function mostrarCotizacion() {
    // --- Precios por marca ---
    const preciosAutos = {
        "HONDA": 585900,
        "NISSAN": 568900,
        "TOYOTA": 531400,
        "MAZDA": 459900,
        "HYUNDAI": 499900,
        "KIA": 547900,
        "MITSUBISHI": 284400,
        "SUZUKI": 339990
    };

    // --- Precios de servicios adicionales ---
    const preciosExtras = {
        "Aire Acondicionado": 4500,
        "GPS": 5560,
        "Seguro": 55900,
        "Quemacocos": 40630,
        "Camara trasera": 30879,
        "Camara Frontal": 30879
    };

    // Obtener datos del formulario
    const form = document.getElementById("formCotizacion");
    const nombre = form.nombre.value;
    const correo = form.correo.value;
    const marca = form.Marca.value;

    // Obtener financiamiento seleccionado
    const tipoFin = form.fin.value;

    // Obtener extras marcados
    const extrasSeleccionados = [...document.querySelectorAll('input[name="extra"]:checked')]
        .map(e => e.value);

    // Precio base del auto
    let total = preciosAutos[marca];

    // Sumar cada extra
    extrasSeleccionados.forEach(extra => {
        total += preciosExtras[extra];
    });

    // Si es crédito, se aumenta 8% 
    if (tipoFin === "Credito") {
        total = total * 1.08;
    }

    // Formatear número
    const totalFormateado = total.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN"
    });

    // Mostrar resultado
    document.getElementById("resultado").innerHTML = `
        <p>Cotización para: <b>${nombre}</b></p>
        <p>Correo: <b>${correo}</b></p>
        <p>Marca seleccionada: <b>${marca}</b></p>
        <p>Financiamiento: <b>${tipoFin}</b></p>
        <p>Extras: <b>${extrasSeleccionados.join(", ") || "Ninguno"}</b></p>
        <p style="font-size: 22px; color: darkgreen;">Total a pagar: ${totalFormateado}</p>
    `;
}
