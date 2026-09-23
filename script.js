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

/*
    IMPORTANTE:

    BOLIS NO SE VENDE AL POR MAYOR.

    Precios mayoristas:

    20 - 39   = $1.600 c/u
    40 - 79   = $1.500 c/u
    80 - 149  = $1.400 c/u
    150+      = $1.300 c/u
*/


let carrito = [];


/* ==========================================
   ELEMENTOS DE LA CALCULADORA
========================================== */

const saborSelect =
    document.getElementById("sabor");

const cantidadInput =
    document.getElementById("cantidad");

const cartContainer =
    document.getElementById("cartContainer");

const totalCantidadElement =
    document.getElementById("totalCantidad");

const precioUnitarioElement =
    document.getElementById("precioUnitario");

const totalPedidoElement =
    document.getElementById("totalPedido");

const nombreCliente =
    document.getElementById("nombreCliente");

const lugarCliente =
    document.getElementById("lugarCliente");

const quoteResult =
    document.getElementById("quoteResult");

const pedidoError =
    document.getElementById("pedidoError");


/* ==========================================
   OBTENER PRECIO MAYORISTA
========================================== */

function obtenerPrecioMayorista(cantidad) {

    if (
        cantidad >= 20 &&
        cantidad <= 39
    ) {

        return 1600;

    }

    if (
        cantidad >= 40 &&
        cantidad <= 79
    ) {

        return 1500;

    }

    if (
        cantidad >= 80 &&
        cantidad <= 149
    ) {

        return 1400;

    }

    if (cantidad >= 150) {

        return 1300;

    }

    return null;

}


/* ==========================================
   VERIFICAR SI ES PRODUCTO MAYORISTA
========================================== */

function esProductoMayorista(sabor) {

    return sabor !== "Bolis";

}


/* ==========================================
   MOSTRAR ERROR
========================================== */

function mostrarErrorPedido(mensaje) {

    if (!pedidoError) return;

    pedidoError.textContent =
        mensaje;

    pedidoError.classList.add(
        "active"
    );

}


/* ==========================================
   OCULTAR ERROR
========================================== */

function ocultarErrorPedido() {

    if (!pedidoError) return;

    pedidoError.textContent =
        "";

    pedidoError.classList.remove(
        "active"
    );

}


/* ==========================================
   AGREGAR PRODUCTO AL CARRITO
========================================== */

function agregarProducto() {

    ocultarErrorPedido();


    /* ==========================================
       VALIDAR SABOR
    ========================================== */

    if (!saborSelect) {

        return;

    }


    const sabor =
        saborSelect.value;


    /* ==========================================
       SEGURIDAD: BOLIS NO MAYORISTA
    ========================================== */

    if (!esProductoMayorista(sabor)) {

        mostrarErrorPedido(
            "Los Bolis no están disponibles para pedidos al por mayor."
        );

        return;

    }


    /* ==========================================
       VALIDAR CANTIDAD
    ========================================== */

    const cantidad =
        Number(cantidadInput.value);


    if (
        !Number.isInteger(cantidad) ||
        cantidad < 1
    ) {

        mostrarErrorPedido(
            "Ingresa una cantidad válida."
        );

        if (cantidadInput) {

            cantidadInput.focus();

        }

        return;

    }


    /* ==========================================
       BUSCAR PRODUCTO EXISTENTE
    ========================================== */

    const productoExistente =
        carrito.find(
            producto =>
                producto.sabor === sabor
        );


    if (productoExistente) {

        productoExistente.cantidad +=
            cantidad;

    } else {

        carrito.push({

            sabor: sabor,

            cantidad: cantidad

        });

    }


    /* ==========================================
       LIMPIAR CANTIDAD
    ========================================== */

    cantidadInput.value = 1;


    /* ==========================================
       ACTUALIZAR CARRITO
    ========================================== */

    actualizarCarrito();

}


/* ==========================================
   CAMBIAR CANTIDAD DEL PRODUCTO
========================================== */

function cambiarCantidad(index, cambio) {

    if (!carrito[index]) return;


    carrito[index].cantidad +=
        cambio;


    if (
        carrito[index].cantidad <= 0
    ) {

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
   CALCULAR TOTAL DE HELADOS
========================================== */

function obtenerCantidadTotal() {

    return carrito.reduce(
        (total, producto) =>
            total + producto.cantidad,
        0
    );

}


/* ==========================================
   ACTUALIZAR CARRITO
========================================== */

function actualizarCarrito() {

    if (!cartContainer) return;


    /* ==========================================
       CARRITO VACÍO
    ========================================== */

    if (carrito.length === 0) {

        cartContainer.innerHTML = `

            <div class="cart-empty">

                <i class="fas fa-basket-shopping"></i>

                <p>
                    Tu pedido está vacío
                </p>

                <small>
                    Agrega sabores para comenzar.
                </small>

            </div>

        `;


        actualizarResumen();

        return;

    }


    /* ==========================================
       MOSTRAR PRODUCTOS
    ========================================== */

    cartContainer.innerHTML = "";


    carrito.forEach(
        (producto, index) => {

            const item =
                document.createElement("div");

            item.classList.add(
                "cart-item"
            );


            item.innerHTML = `

                <div class="cart-item-info">

                    <strong>
                        ${producto.sabor}
                    </strong>

                    <small>
                        ${producto.cantidad} helado${producto.cantidad !== 1 ? "s" : ""}
                    </small>

                </div>


                <div class="cart-item-controls">

                    <button
                        type="button"
                        onclick="cambiarCantidad(${index}, -1)"
                        aria-label="Disminuir cantidad"
                    >
                        <i class="fas fa-minus"></i>
                    </button>


                    <span>
                        ${producto.cantidad}
                    </span>


                    <button
                        type="button"
                        onclick="cambiarCantidad(${index}, 1)"
                        aria-label="Aumentar cantidad"
                    >
                        <i class="fas fa-plus"></i>
                    </button>


                    <button
                        type="button"
                        class="cart-delete"
                        onclick="eliminarProducto(${index})"
                        aria-label="Eliminar producto"
                    >
                        <i class="fas fa-trash"></i>
                    </button>

                </div>

            `;


            cartContainer.appendChild(item);

        }
    );


    actualizarResumen();

}


/* ==========================================
   ACTUALIZAR RESUMEN
========================================== */

function actualizarResumen() {

    const cantidadTotal =
        obtenerCantidadTotal();


    /* ==========================================
       SI NO HAY PRODUCTOS
    ========================================== */

    if (cantidadTotal === 0) {

        if (totalCantidadElement) {

            totalCantidadElement.textContent =
                "0";

        }

        if (precioUnitarioElement) {

            precioUnitarioElement.textContent =
                "$0";

        }

        if (totalPedidoElement) {

            totalPedidoElement.textContent =
                "$0";

        }

        if (quoteResult) {

            quoteResult.classList.remove(
                "active"
            );

        }

        return;

    }


    /* ==========================================
       OBTENER PRECIO
    ========================================== */

    const precio =
        obtenerPrecioMayorista(
            cantidadTotal
        );


    /* ==========================================
       MENOS DE 20
    ========================================== */

    if (!precio) {

        if (totalCantidadElement) {

            totalCantidadElement.textContent =
                cantidadTotal;

        }

        if (precioUnitarioElement) {

            precioUnitarioElement.textContent =
                "Desde $1.600";

        }

        if (totalPedidoElement) {

            totalPedidoElement.textContent =
                "Pendiente";

        }

        if (quoteResult) {

            quoteResult.classList.add(
                "active"
            );

        }

        return;

    }


    /* ==========================================
       CALCULAR TOTAL
    ========================================== */

    const total =
        cantidadTotal * precio;


    /* ==========================================
       MOSTRAR CANTIDAD
    ========================================== */

    if (totalCantidadElement) {

        totalCantidadElement.textContent =
            `${cantidadTotal}`;

    }


    /* ==========================================
       MOSTRAR PRECIO UNITARIO
    ========================================== */

    if (precioUnitarioElement) {

        precioUnitarioElement.textContent =
            formatoMoneda(precio);

    }


    /* ==========================================
       MOSTRAR TOTAL
    ========================================== */

    if (totalPedidoElement) {

        totalPedidoElement.textContent =
            formatoMoneda(total);

    }


    if (quoteResult) {

        quoteResult.classList.add(
            "active"
        );

    }

}


/* ==========================================
   ENVIAR PEDIDO POR WHATSAPP
========================================== */

function enviarPedidoWhatsApp() {

    ocultarErrorPedido();


    /* ==========================================
       VALIDAR CARRITO
    ========================================== */

    if (carrito.length === 0) {

        mostrarErrorPedido(
            "Agrega al menos un sabor a tu pedido."
        );

        return;

    }


    /* ==========================================
       CANTIDAD TOTAL
    ========================================== */

    const cantidadTotal =
        obtenerCantidadTotal();


    /* ==========================================
       VALIDAR MÍNIMO
    ========================================== */

    if (cantidadTotal < 20) {

        mostrarErrorPedido(
            "El pedido mínimo al por mayor es de 20 helados."
        );

        return;

    }


    /* ==========================================
       OBTENER PRECIO
    ========================================== */

    const precio =
        obtenerPrecioMayorista(
            cantidadTotal
        );


    if (!precio) {

        mostrarErrorPedido(
            "No fue posible calcular el precio del pedido."
        );

        return;

    }


    /* ==========================================
       VALIDAR NOMBRE
    ========================================== */

    const nombre =
        nombreCliente
            ? nombreCliente.value.trim()
            : "";


    if (!nombre) {

        mostrarErrorPedido(
            "Por favor escribe tu nombre."
        );

        if (nombreCliente) {

            nombreCliente.focus();

        }

        return;

    }


    /* ==========================================
       VALIDAR LUGAR
    ========================================== */

    const lugar =
        lugarCliente
            ? lugarCliente.value.trim()
            : "";


    if (!lugar) {

        mostrarErrorPedido(
            "Por favor escribe el lugar de entrega."
        );

        if (lugarCliente) {

            lugarCliente.focus();

        }

        return;

    }


    /* ==========================================
       CALCULAR TOTAL
    ========================================== */

    const total =
        cantidadTotal * precio;


    /* ==========================================
       CONSTRUIR DETALLE DEL PEDIDO
    ========================================== */

    let detalleProductos = "";


    carrito.forEach(producto => {

        detalleProductos +=
            `• ${producto.sabor}: ${producto.cantidad} unidades\n`;

    });


    /* ==========================================
       MENSAJE WHATSAPP
    ========================================== */

    const mensaje =
`🍦 *PEDIDO DE HELADOS DULCE FRÍO*

👤 *Nombre:* ${nombre}

📦 *Pedido:*
${detalleProductos}
📊 *Total de helados:* ${cantidadTotal}

💰 *Precio unitario:* ${formatoMoneda(precio)}

💵 *Total:* ${formatoMoneda(total)}

📍 *Lugar de entrega:* ${lugar}`;


    /* ==========================================
       ABRIR WHATSAPP
    ========================================== */

    abrirWhatsApp(mensaje);

}


/* ==========================================
   INICIALIZAR CALCULADORA
========================================== */

actualizarCarrito();