/* ==========================================
   CONFIGURACIÓN
========================================== */

// WhatsApp del negocio
// Código de país + número, sin +, espacios ni guiones.
const WHATSAPP = "573227403563";


/* ==========================================
   MENÚ MOBILE
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


/* ==========================================
   NAVBAR
========================================== */

window.addEventListener("scroll", () => {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.10)";

    } else {

        navbar.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.05)";

    }

});


/* ==========================================
   CARRUSEL
========================================== */

const carouselTrack =
    document.getElementById("carouselTrack");

const carouselSlides =
    document.querySelectorAll(".carousel-slide");

const carouselPrev =
    document.getElementById("prevBtn");

const carouselNext =
    document.getElementById("nextBtn");

const carouselDots =
    document.getElementById("carouselDots");


let currentSlide = 0;
let carouselInterval;


/* ==========================================
   INICIALIZAR CARRUSEL
========================================== */

if (
    carouselTrack &&
    carouselSlides.length > 0 &&
    carouselDots
) {

    carouselSlides.forEach((slide, index) => {

        const dot = document.createElement("button");

        dot.classList.add("carousel-dot");

        dot.setAttribute(
            "aria-label",
            `Ir a la imagen ${index + 1}`
        );

        if (index === 0) {

            dot.classList.add("active");

        }

        dot.addEventListener("click", () => {

            currentSlide = index;

            updateCarousel();

            restartCarousel();

        });

        carouselDots.appendChild(dot);

    });


    const dots =
        document.querySelectorAll(".carousel-dot");


    /* ==========================================
       ACTUALIZAR CARRUSEL
    ========================================== */

    function updateCarousel() {

        carouselTrack.style.transform =
            `translateX(-${currentSlide * 100}%)`;


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        });

    }


    /* ==========================================
       SIGUIENTE IMAGEN
    ========================================== */

    function nextSlide() {

        currentSlide++;

        if (
            currentSlide >= carouselSlides.length
        ) {

            currentSlide = 0;

        }

        updateCarousel();

    }


    /* ==========================================
       IMAGEN ANTERIOR
    ========================================== */

    function previousSlide() {

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide =
                carouselSlides.length - 1;

        }

        updateCarousel();

    }


    /* ==========================================
       BOTÓN DERECHA
    ========================================== */

    if (carouselNext) {

        carouselNext.addEventListener(
            "click",
            () => {

                nextSlide();

                restartCarousel();

            }
        );

    }


    /* ==========================================
       BOTÓN IZQUIERDA
    ========================================== */

    if (carouselPrev) {

        carouselPrev.addEventListener(
            "click",
            () => {

                previousSlide();

                restartCarousel();

            }
        );

    }


    /* ==========================================
       CARRUSEL AUTOMÁTICO
    ========================================== */

    function startCarousel() {

        carouselInterval = setInterval(
            nextSlide,
            5000
        );

    }


    /* ==========================================
       REINICIAR AUTOMÁTICO
    ========================================== */

    function restartCarousel() {

        clearInterval(carouselInterval);

        startCarousel();

    }


    startCarousel();

}


/* ==========================================
   WHATSAPP
========================================== */

function abrirWhatsApp(mensaje) {

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}


/* ==========================================
   PEDIDO DE PRODUCTO
========================================== */

function pedirProducto(producto) {

    const mensaje =
        `Hola 👋, estoy interesado en pedir ${producto}. ¿Me pueden dar información sobre disponibilidad y entrega?`;

    abrirWhatsApp(mensaje);

}


/* ==========================================
   PEDIDO GENERAL
========================================== */

function hacerPedidoGeneral() {

    const mensaje =
        "Hola 👋, quiero hacer un pedido de helados. ¿Me pueden compartir la información disponible?";

    abrirWhatsApp(mensaje);

}


/* ==========================================
   CONTACTO MAYORISTA
========================================== */

function contactarMayorista() {

    const mensaje =
        "Hola 👋, estoy interesado en comprar sus helados al por mayor para venderlos. Quisiera conocer los precios, cantidades mínimas y condiciones para revendedores.";

    abrirWhatsApp(mensaje);

}


/* ==========================================
   CONTACTO WHATSAPP
========================================== */

function contactarWhatsApp() {

    const mensaje =
        "Hola 👋, quiero información sobre sus helados.";

    abrirWhatsApp(mensaje);

}


/* ==========================================
   BOTÓN WHATSAPP FLOTANTE
========================================== */

const whatsappFloat =
    document.getElementById("whatsappFloat");

if (whatsappFloat) {

    whatsappFloat.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            contactarWhatsApp();

        }
    );

}


/* ==========================================
   FORMATO MONEDA
========================================== */

function formatoMoneda(valor) {

    return new Intl.NumberFormat(
        "es-CO",
        {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }
    ).format(valor);

}


/* ==========================================
   AÑO AUTOMÁTICO
========================================== */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ==========================================
   CARRITO MAYORISTA
========================================== */

// Pedido mínimo: 15 helados.
// Bolis no está disponible al por mayor.
// Precios:
// 15 - 35   = $1.600 c/u
// 36 - 75   = $1.500 c/u
// 76 - 149  = $1.450 c/u
// 150+      = $1.400 c/u

let carrito = [];


/* ==========================================
   ELEMENTOS DE LA CALCULADORA
========================================== */

const saborSelect = document.getElementById("sabor");
const cantidadInput = document.getElementById("cantidad");
const cartContainer = document.getElementById("cartContainer");

const totalCantidadElement = document.getElementById("totalCantidad");
const precioUnitarioElement = document.getElementById("precioUnitario");
const totalPedidoElement = document.getElementById("totalPedido");

const nombreCliente = document.getElementById("nombreCliente");
const lugarCliente = document.getElementById("lugarCliente");
const quoteResult = document.getElementById("quoteResult");

// El HTML actual no incluye un elemento con id="pedidoError".
// Se mostrará el mensaje dentro de la calculadora.
const pedidoError = document.getElementById("pedidoError");


/* ==========================================
   OBTENER PRECIO MAYORISTA
========================================== */

function obtenerPrecioMayorista(cantidad) {

    if (cantidad >= 150) return 1400;
    if (cantidad >= 76) return 1450;
    if (cantidad >= 36) return 1500;
    if (cantidad >= 15) return 1600;

    return null;
}


/* ==========================================
   VALIDAR PRODUCTOS MAYORISTAS
========================================== */

function esProductoMayorista(sabor) {
    return sabor.trim().toLowerCase() !== "bolis";
}


/* ==========================================
   MOSTRAR ERROR
========================================== */

function mostrarErrorPedido(mensaje) {

    if (pedidoError) {
        pedidoError.textContent = mensaje;
        pedidoError.classList.add("active");
        return;
    }

    let error = document.getElementById("pedidoError");

    if (!error) {
        error = document.createElement("p");
        error.id = "pedidoError";
        error.className = "pedido-error active";
        error.style.color = "#c62828";
        error.style.marginTop = "10px";

        if (cartContainer) {
            cartContainer.insertAdjacentElement("afterend", error);
        } else {
            return;
        }
    }

    error.textContent = mensaje;
    error.classList.add("active");
}


/* ==========================================
   OCULTAR ERROR
========================================== */

function ocultarErrorPedido() {

    if (!pedidoError) {
        const error = document.getElementById("pedidoError");

        if (error) {
            error.textContent = "";
            error.classList.remove("active");
        }

        return;
    }

    pedidoError.textContent = "";
    pedidoError.classList.remove("active");
}


/* ==========================================
   AGREGAR PRODUCTO AL CARRITO
========================================== */

function agregarProducto() {

    ocultarErrorPedido();

    if (!saborSelect || !cantidadInput) return;

    const sabor = saborSelect.value;
    const cantidad = Number(cantidadInput.value);

    if (!esProductoMayorista(sabor)) {
        mostrarErrorPedido(
            "Los Bolis no están disponibles para pedidos al por mayor."
        );
        return;
    }

    if (!Number.isInteger(cantidad) || cantidad < 1) {
        mostrarErrorPedido("Ingresa una cantidad válida.");
        cantidadInput.focus();
        return;
    }

    const productoExistente = carrito.find(
        producto => producto.sabor === sabor
    );

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({
            sabor: sabor,
            cantidad: cantidad
        });
    }

    cantidadInput.value = 1;

    actualizarCarrito();
}


/* ==========================================
   CAMBIAR CANTIDAD DEL PRODUCTO
========================================== */

function cambiarCantidad(index, cambio) {

    if (!carrito[index]) return;

    carrito[index].cantidad += cambio;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    actualizarCarrito();
}


/* ==========================================
   ELIMINAR PRODUCTO
========================================== */

function eliminarProducto(index) {

    if (!carrito[index]) return;

    carrito.splice(index, 1);

    actualizarCarrito();
}


/* ==========================================
   OBTENER CANTIDAD TOTAL
========================================== */

function obtenerCantidadTotal() {

    return carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );
}


/* ==========================================
   ACTUALIZAR CARRITO
========================================== */

function actualizarCarrito() {

    if (!cartContainer) return;

    ocultarErrorPedido();

    if (carrito.length === 0) {

        cartContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-basket-shopping"></i>
                <p>Tu pedido está vacío</p>
                <small>Agrega sabores para comenzar.</small>
            </div>
        `;

        actualizarResumen();
        return;
    }

    cartContainer.innerHTML = "";

    carrito.forEach((producto, index) => {

        const item = document.createElement("div");
        item.classList.add("cart-item");

        const info = document.createElement("div");
        info.classList.add("cart-item-info");

        const nombre = document.createElement("strong");
        nombre.textContent = producto.sabor;

        const detalle = document.createElement("small");
        detalle.textContent =
            `${producto.cantidad} helado${producto.cantidad !== 1 ? "s" : ""}`;

        info.appendChild(nombre);
        info.appendChild(detalle);

        const controles = document.createElement("div");
        controles.classList.add("cart-item-controls");

        const btnMenos = document.createElement("button");
        btnMenos.type = "button";
        btnMenos.innerHTML = '<i class="fas fa-minus"></i>';
        btnMenos.setAttribute("aria-label", "Disminuir cantidad");
        btnMenos.addEventListener("click", () => cambiarCantidad(index, -1));

        const cantidad = document.createElement("span");
        cantidad.textContent = producto.cantidad;

        const btnMas = document.createElement("button");
        btnMas.type = "button";
        btnMas.innerHTML = '<i class="fas fa-plus"></i>';
        btnMas.setAttribute("aria-label", "Aumentar cantidad");
        btnMas.addEventListener("click", () => cambiarCantidad(index, 1));

        const btnEliminar = document.createElement("button");
        btnEliminar.type = "button";
        btnEliminar.classList.add("cart-delete");
        btnEliminar.innerHTML = '<i class="fas fa-trash"></i>';
        btnEliminar.setAttribute("aria-label", "Eliminar producto");
        btnEliminar.addEventListener("click", () => eliminarProducto(index));

        controles.append(btnMenos, cantidad, btnMas, btnEliminar);
        item.append(info, controles);
        cartContainer.appendChild(item);
    });

    actualizarResumen();
}


/* ==========================================
   ACTUALIZAR RESUMEN
========================================== */

function actualizarResumen() {

    const cantidadTotal = obtenerCantidadTotal();

    if (totalCantidadElement) {
        totalCantidadElement.textContent = cantidadTotal;
    }

    if (cantidadTotal === 0) {

        if (precioUnitarioElement) {
            precioUnitarioElement.textContent = "$0";
        }

        if (totalPedidoElement) {
            totalPedidoElement.textContent = "$0";
        }

        if (quoteResult) {
            quoteResult.classList.remove("active");
        }

        return;
    }

    const precio = obtenerPrecioMayorista(cantidadTotal);

    if (!precio) {

        if (precioUnitarioElement) {
            precioUnitarioElement.textContent = "Desde $1.600";
        }

        if (totalPedidoElement) {
            totalPedidoElement.textContent = "Desde $24.000";
        }

        if (quoteResult) {
            quoteResult.classList.add("active");
        }

        return;
    }

    const total = cantidadTotal * precio;

    if (precioUnitarioElement) {
        precioUnitarioElement.textContent = formatoMoneda(precio);
    }

    if (totalPedidoElement) {
        totalPedidoElement.textContent = formatoMoneda(total);
    }

    if (quoteResult) {
        quoteResult.classList.add("active");
    }
}


/* ==========================================
   ENVIAR PEDIDO POR WHATSAPP
========================================== */

function enviarPedidoWhatsApp() {

    ocultarErrorPedido();

    if (carrito.length === 0) {
        mostrarErrorPedido("Agrega al menos un sabor a tu pedido.");
        return;
    }

    const cantidadTotal = obtenerCantidadTotal();

    if (cantidadTotal < 15) {
        mostrarErrorPedido(
            "El pedido mínimo al por mayor es de 15 helados."
        );
        return;
    }

    const precio = obtenerPrecioMayorista(cantidadTotal);

    if (!precio) {
        mostrarErrorPedido("No fue posible calcular el precio del pedido.");
        return;
    }

    const nombre = nombreCliente ? nombreCliente.value.trim() : "";

    if (!nombre) {
        mostrarErrorPedido("Por favor escribe tu nombre.");

        if (nombreCliente) nombreCliente.focus();

        return;
    }

    const lugar = lugarCliente ? lugarCliente.value.trim() : "";

    if (!lugar) {
        mostrarErrorPedido("Por favor escribe el lugar de entrega.");

        if (lugarCliente) lugarCliente.focus();

        return;
    }

    const total = cantidadTotal * precio;

    const detalleProductos = carrito.map(producto =>
        `• ${producto.sabor}: ${producto.cantidad} unidades`
    ).join("\n");

    const mensaje =
`🍦 *PEDIDO MAYORISTA - DULCE FRÍO*

👤 *Nombre:* ${nombre}

📦 *Detalle del pedido:*
${detalleProductos}

📊 *Total de helados:* ${cantidadTotal}

💰 *Precio por helado:* ${formatoMoneda(precio)}

💵 *Total del pedido:* ${formatoMoneda(total)}

📍 *Lugar de entrega:* ${lugar}`;

    abrirWhatsApp(mensaje);
}


/* ==========================================
   INICIALIZAR CALCULADORA
========================================== */

actualizarCarrito();