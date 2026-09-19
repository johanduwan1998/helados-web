
/* ==========================================
   CONFIGURACIÓN
========================================== */

// Cambia este número por el WhatsApp real del negocio.
// Formato: código de país + número, sin +, espacios ni guiones.
const WHATSAPP = "573227403563";


/* ==========================================
   MENÚ MOBILE
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ==========================================
   NAVBAR
========================================== */

window.addEventListener("scroll", () => {

    const navbar = document.getElementById("navbar");

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
    document.getElementById("carouselPrev");

const carouselNext =
    document.getElementById("carouselNext");

const carouselDots =
    document.getElementById("carouselDots");


let currentSlide = 0;

let carouselInterval;


/*
    Crear los puntos del carrusel
*/

carouselSlides.forEach((slide, index) => {

    const dot = document.createElement("button");

    dot.classList.add("carousel-dot");

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


function nextSlide() {

    currentSlide++;

    if (currentSlide >= carouselSlides.length) {

        currentSlide = 0;

    }

    updateCarousel();

}


function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = carouselSlides.length - 1;

    }

    updateCarousel();

}


if (carouselNext) {

    carouselNext.addEventListener(
        "click",
        () => {

            nextSlide();

            restartCarousel();

        }
    );

}


if (carouselPrev) {

    carouselPrev.addEventListener(
        "click",
        () => {

            previousSlide();

            restartCarousel();

        }
    );

}


/*
    Carrusel automático
*/

function startCarousel() {

    carouselInterval = setInterval(
        nextSlide,
        5000
    );

}


function restartCarousel() {

    clearInterval(carouselInterval);

    startCarousel();

}


startCarousel();


/* ==========================================
   WHATSAPP
========================================== */

function abrirWhatsApp(mensaje) {

    const url =
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}


/*
    Pedido de producto
*/

function pedirProducto(producto) {

    const mensaje =
        `Hola 👋, estoy interesado en pedir ${producto}. ¿Me pueden dar información sobre disponibilidad y entrega?`;

    abrirWhatsApp(mensaje);

}


/*
    Pedido general
*/

function hacerPedidoGeneral() {

    const mensaje =
        "Hola 👋, quiero hacer un pedido de helados. ¿Me pueden compartir la información disponible?";

    abrirWhatsApp(mensaje);

}


/*
    Contacto para mayoristas
*/

function contactarMayorista() {

    const mensaje =
        "Hola 👋, estoy interesado en comprar sus helados al por mayor para venderlos. Quisiera conocer los precios, cantidades mínimas y condiciones para revendedores.";

    abrirWhatsApp(mensaje);

}


/*
    Botón flotante
*/

function contactarWhatsApp() {

    const mensaje =
        "Hola 👋, quiero información sobre sus helados.";

    abrirWhatsApp(mensaje);

}


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
   CALCULADORA
========================================== */

function calcularGanancia() {

    const inversion =
        Number(
            document.getElementById("inversion").value
        );


    const costo =
        Number(
            document.getElementById("costo").value
        );


    const precioVenta =
        Number(
            document.getElementById("precioVenta").value
        );


    /*
        Validación
    */

    if (
        inversion <= 0 ||
        costo <= 0 ||
        precioVenta <= 0
    ) {

        alert(
            "Por favor ingresa valores mayores que cero."
        );

        return;

    }


    /*
        Calculamos cuántos helados
        se pueden producir.
    */

    const cantidad =
        Math.floor(inversion / costo);


    /*
        Ingreso total
    */

    const ventas =
        cantidad * precioVenta;


    /*
        Ganancia bruta
    */

    const ganancia =
        ventas - inversion;


    /*
        Margen bruto sobre ventas
    */

    let margen = 0;

    if (ventas > 0) {

        margen =
            (ganancia / ventas) * 100;

    }


    /*
        Mostrar resultados
    */

    document.getElementById(
        "resultadoCantidad"
    ).textContent =
        cantidad;


    document.getElementById(
        "resultadoInversion"
    ).textContent =
        formatoMoneda(inversion);


    document.getElementById(
        "resultadoVentas"
    ).textContent =
        formatoMoneda(ventas);


    document.getElementById(
        "resultadoGanancia"
    ).textContent =
        formatoMoneda(ganancia);


    document.getElementById(
        "resultadoMargen"
    ).textContent =
        `${margen.toFixed(1).replace(".", ",")}%`;

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
   CALCULAR AL CARGAR
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        calcularGanancia();

    }
);


/* ==========================================
   AÑO AUTOMÁTICO
========================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}

