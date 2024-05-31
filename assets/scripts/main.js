function inicio(){
    location.href="../index.html";
}

function inicio_2(){
    location.href="index.html";
}

function mapa(){
    location.href="https://mundoejecutivo.com.mx/eventoTI-2024/files/mapa.html";
}

function formulario(){
    location.href="https://mundoejecutivo.com.mx/eventoTI-2024/files/formulario.html";
}

function cumbredoscientos(){
    location.href="https://mundoejecutivo.com.mx/cumbre200-2024/";
}

function cumbremil(){
    location.href="https://cumbre1000.com/";
}

function cionet_2(){
    location.href="https://cionet-int.typeform.com/premiosmexico";
}

function youtube(){
    location.href="https://www.youtube.com/@MundoEjecutivoTV";
}

function itinerario_descargar() {
    location.href="assets/archivos/itinerario.pdf";
}

function seccion_itinerario() {
    location.href="#id_seccion_itinerario";
}

function seccion_panelistas() {
    location.href="#id_seccion_panelistas";
}

function seccion_videos() {
    location.href="#id_seccion_videos";
}

function evento_youtube(){
    location.href="https://www.youtube.com/watch?v=yoeliAon10k&ab_channel=MundoEjecutivoTV";
}

function facebook_barra_final(){
    location.href="https://www.facebook.com/MundoEjecutivoWeb";
}

function instagram_barra_final(){
    location.href="https://www.instagram.com/mundo.ejecutivo.mx/?hl=es-la";
}

function linkedin_barra_final(){
    location.href="https://www.linkedin.com/company/grupo-mundo-ejecutivo/mycompany/verification/";
}

function x_barra_final(){
    location.href="https://twitter.com/MundoEjecutivo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";
}

function compartir(){
    document.getElementById("id_contenedor_compartir").style.display="flex";
}

function whatsapp(){
    window.open("https://wa.me/?text=https://maps.app.goo.gl/8W27GJ9HKv54qQxn8", "_blank");
}

function cionet(){
    window.open("https://www.cionet.com/cionet-mexico", "_blank");
}

function facebook(){
    window.open("https://www.facebook.com/sharer/sharer.php?u=https://maps.app.goo.gl/8W27GJ9HKv54qQxn8", "_blank");
}

function x(){
    window.open("https://twitter.com/intent/tweet?url=https://maps.app.goo.gl/8W27GJ9HKv54qQxn8", "_blank");
}

function gmail(){
    window.open("mailto:?subject=Enlace%20interesante&body=¡Hola!%0A%0AQuería%20compartir%20este%20enlace%20contigo:%0A%0Ahttps://maps.app.goo.gl/8W27GJ9HKv54qQxn8", "_blank");
}

function messenger(){
    window.open("fb-messenger://share/?link=https://maps.app.goo.gl/8W27GJ9HKv54qQxn8", "_blank");
}

function telegram(){
    window.open("https://t.me/share/url?url=https://maps.app.goo.gl/8W27GJ9HKv54qQxn8", "_blank");
}

function seccion_aplicar(){
    location.href="#id_seccion_aplicar";
}

function newsletter(){
    location.href="https://whatsapp.com/channel/0029Va8xy5CISTkErjPEba3I";
}

function copiar(){
    var enlace = "https://maps.app.goo.gl/8W27GJ9HKv54qQxn8";
    navigator.clipboard.writeText(enlace).then(function() {
        alert("¡Enlace copiado al portapapeles!");
    }, function(err) {
        console.error('No se pudo copiar el enlace: ', err);
    });
}

function cambiarcategoria_1(){
    document.getElementById("id_categorias_bloque_1").style.display="flex";
    document.getElementById("id_categorias_bloque_2").style.display="none";
    document.getElementById("id_categorias_bloque_3").style.display="none";
    document.getElementById("id_categorias_bloque_4").style.display="none";



    document.getElementById("id_punto_1_categorias").className="punto_activo";
    document.getElementById("id_punto_2_categorias").className="punto";
    document.getElementById("id_punto_3_categorias").className="punto";
    document.getElementById("id_punto_4_categorias").className="punto";
}

function cambiarcategoria_2() {
    document.getElementById("id_categorias_bloque_1").style.display="none";
    document.getElementById("id_categorias_bloque_2").style.display="flex";
    document.getElementById("id_categorias_bloque_3").style.display="none";
    document.getElementById("id_categorias_bloque_4").style.display="none";



    document.getElementById("id_punto_1_categorias").className="punto";
    document.getElementById("id_punto_2_categorias").className="punto_activo";
    document.getElementById("id_punto_3_categorias").className="punto";
    document.getElementById("id_punto_4_categorias").className="punto";
}

function cambiarcategoria_3() {
    document.getElementById("id_categorias_bloque_1").style.display="none";
    document.getElementById("id_categorias_bloque_2").style.display="none";
    document.getElementById("id_categorias_bloque_3").style.display="flex";
    document.getElementById("id_categorias_bloque_4").style.display="none";



    document.getElementById("id_punto_1_categorias").className="punto";
    document.getElementById("id_punto_2_categorias").className="punto";
    document.getElementById("id_punto_3_categorias").className="punto_activo";
    document.getElementById("id_punto_4_categorias").className="punto";
}

function cambiarcategoria_4() {
    document.getElementById("id_categorias_bloque_1").style.display="none";
    document.getElementById("id_categorias_bloque_2").style.display="none";
    document.getElementById("id_categorias_bloque_3").style.display="none";
    document.getElementById("id_categorias_bloque_4").style.display="flex";



    document.getElementById("id_punto_1_categorias").className="punto";
    document.getElementById("id_punto_2_categorias").className="punto";
    document.getElementById("id_punto_3_categorias").className="punto";
    document.getElementById("id_punto_4_categorias").className="punto_activo";
}

function cerrar(){
    document.getElementById("id_ventana_ia").style.display="none";
}

function abrir_ia(){
    document.getElementById("id_ventana_ia").style.display="flex";
}

function cambiarcategoriaevento_1(){
    document.getElementById("id_tarjeta_evento_1").style.display="flex";
    document.getElementById("id_tarjeta_evento_2").style.display="flex";
    document.getElementById("id_tarjeta_evento_3").style.display="none";
    document.getElementById("id_tarjeta_evento_4").style.display="none";

    document.getElementById("id_punto_1_eventos").className="punto_activo";
    document.getElementById("id_punto_2_eventos").className="punto";
}

function cambiarcategoriaevento_2(){
    document.getElementById("id_tarjeta_evento_1").style.display="none";
    document.getElementById("id_tarjeta_evento_2").style.display="none";
    document.getElementById("id_tarjeta_evento_3").style.display="flex";
    document.getElementById("id_tarjeta_evento_4").style.display="flex";

    document.getElementById("id_punto_1_eventos").className="punto";
    document.getElementById("id_punto_2_eventos").className="punto_activo";
}

function menu_index() {
    // Verificar el estado actual de los elementos
    var displayState = document.getElementById("id_boton_flotante_1").style.display;

    // Si están visibles, ocultarlos; de lo contrario, mostrarlos
    if (displayState === "flex") {
        // Ocultar los elementos
        document.getElementById("id_boton_flotante_1").style.display = "none";
        document.getElementById("id_boton_flotante_2").style.display = "none";
        document.getElementById("id_boton_flotante_3").style.display = "none";
        document.getElementById("id_boton_flotante_5").style.display = "none";

        // Restaurar las clases de los botones flotantes para la sección 2
        document.getElementById("id_boton_flotante_1_seccion_2").className = "boton_flotante_1_seccion_2";
        document.getElementById("id_boton_flotante_2_seccion_2").className = "boton_flotante_1_seccion_2";
        document.getElementById("id_boton_flotante_3_seccion_2").className = "boton_flotante_1_seccion_2";

        // Mostrar los botones flotantes para la sección 1
        document.getElementById("id_boton_flotante_1_seccion_1").style.display = "block";
        document.getElementById("id_boton_flotante_2_seccion_1").style.display = "block";
        document.getElementById("id_boton_flotante_3_seccion_1").style.display = "block";
    } else {
        // Mostrar los elementos
        document.getElementById("id_boton_flotante_1").style.display = "flex";
        document.getElementById("id_boton_flotante_2").style.display = "flex";
        document.getElementById("id_boton_flotante_3").style.display = "flex";
        document.getElementById("id_boton_flotante_5").style.display = "flex";

        // Cambiar las clases de los botones flotantes para la sección 2
        document.getElementById("id_boton_flotante_1_seccion_2").className = "boton_flotante_1_seccion_3";
        document.getElementById("id_boton_flotante_2_seccion_2").className = "boton_flotante_1_seccion_3";
        document.getElementById("id_boton_flotante_3_seccion_2").className = "boton_flotante_1_seccion_3";

        // Ocultar los botones flotantes para la sección 1
        document.getElementById("id_boton_flotante_1_seccion_1").style.display = "none";
        document.getElementById("id_boton_flotante_2_seccion_1").style.display = "none";
        document.getElementById("id_boton_flotante_3_seccion_1").style.display = "none";
    }
}

function revista_1(){
    location.href="https://issuu.com/mundoeje/docs/543_me_abr_juliocarranza_presidentedelaabm";
}

function revista_2(){
    location.href="https://issuu.com/mundoeje/docs/219_mue_200_lideres-lourdes_castaneda";
}

function revista_3(){
    location.href="https://issuu.com/mundoeje/docs/88_cm_abr_low_ok";
}

function revista_4(){
    location.href="https://issuu.com/mundoeje/docs/027_lm_2023_low";
}

function revista_5(){
    location.href="https://issuu.com/mundoeje/docs/216_mue_may-jun.";
}

function revista_6(){
    location.href="https://issuu.com/mundoeje/docs/only54_web2";
}

function revista_7(){
    location.href="https://issuu.com/mundoeje/docs/216_mue_may-jun.";
}

function revista_8(){
    location.href="https://issuu.com/mundoeje/docs/541_me_feb_arturoeliasayub_elemprendedor_";
}

function revista_9(){
    location.href="https://issuu.com/mundoeje/docs/542_me_mar_ricardocabanas_enelringdelosnegocios";
}

function revista_10(){
    location.href="https://issuu.com/mundoeje/docs/541_me_feb_enriquepresburger_factorexpress_";
}

function revista_11(){
    location.href="https://issuu.com/mundoeje/docs/541_me_feb_arturoeliasayub_elemprendedor_";
}



    fetch("assets/json/panelistas.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        crearTarjetasPanelistas(data.panelistas);
    })
    .catch(function(error) {
        console.error('Error al cargar el archivo JSON:', error);
    });

function crearTarjetasPanelistas(panelistas) {
    var contenedorPanelistas = document.getElementById('contenedor-panelistas');

    panelistas.forEach(function(panelista) {
        var tarjetaPanelista = document.createElement('div');
        tarjetaPanelista.classList.add('tarjeta_panelista');

        var seccion1 = document.createElement('div');
        seccion1.classList.add('tarjeta_panelista_seccion_1');

        var contenedorFoto = document.createElement('div');
        contenedorFoto.classList.add('contenedor_foto_panelista');
        var imagen = document.createElement('img');
        imagen.classList.add('imagen_panelista');
        imagen.src = panelista.imagen;
        imagen.alt = panelista.nombre;
        contenedorFoto.appendChild(imagen);
        seccion1.appendChild(contenedorFoto);

        var seccion2 = document.createElement('div');
        seccion2.classList.add('tarjeta_panelista_seccion_2');

        var seccion2Texto = document.createElement('div');
        seccion2Texto.classList.add('tarjeta_panelista_seccion_2_texto');
        var titulo = document.createElement('p');
        titulo.classList.add('texto_panelista_titulo');
        titulo.textContent = panelista.nombre;
        var subtitulo = document.createElement('p');
        subtitulo.classList.add('texto_panelista_subtitulo');
        subtitulo.textContent = panelista.cargo;
        seccion2Texto.appendChild(titulo);
        seccion2Texto.appendChild(subtitulo);

        var boton = document.createElement('a');
        boton.classList.add('boton_panelista');
        boton.textContent = 'CONÓCELO';
        boton.href = panelista.pagina;

        seccion2.appendChild(seccion2Texto);
        seccion2.appendChild(boton);

        tarjetaPanelista.appendChild(seccion1);
        tarjetaPanelista.appendChild(seccion2);

        contenedorPanelistas.appendChild(tarjetaPanelista);
    });
}



// Función para cargar un archivo JSON desde una URL
function cargarJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

// Función para cargar la información de los panelistas en el HTML
function cargarPanelistas(bloque) {
    // URL del archivo JSON
    const jsonURL = '../../assets/json/panelistas.json';

    // Cargar el archivo JSON
    cargarJSON(jsonURL, function(response) {
        const panelistasJSON = JSON.parse(response);

        // Obtener el contenedor correspondiente según el bloque y la página actual
        let contenedorId;
        if (bloque === "bloque1") {
            contenedorId = 'contenedor-panelistas-nota';
        } else if (bloque === "bloque2") {
            contenedorId = 'contenedor-panelistas-nota';
        }

        const contenedorPanelistas = document.getElementById(contenedorId);
        const contenedorImagenes = document.querySelector('.contenedor_principal_panelista_seccion_2');

        // Filtrar los panelistas por bloque
        const panelistasBloque = panelistasJSON.panelistas.filter(panelista => panelista.bloque === bloque);

        // Iterar sobre cada panelista en el bloque
        panelistasBloque.forEach(panelista => {
            // Crear elementos <p> para el nombre y el cargo
            const nombreElement = document.createElement('p');
            const cargoElement = document.createElement('p');

            // Crear elemento <img> para la imagen
            const imagenElement = document.createElement('img');

            // Asignar clases a los elementos <p> y <img>
            nombreElement.classList.add('texto_contenedor_principal_panelista_seccion_1_titulo');
            cargoElement.classList.add('texto_contenedor_principal_panelista_seccion_1_subtitulo');
            imagenElement.classList.add('imagen_panelista_nota');

            // Asignar el texto correspondiente a los elementos <p>
            nombreElement.textContent = panelista.nombre;
            cargoElement.textContent = panelista.cargo;

            // Asignar atributos a los elementos <img>
            imagenElement.src = panelista.imagen_2;
            imagenElement.alt = panelista.nombre;

            // Agregar los elementos al contenedor correspondiente
            contenedorPanelistas.appendChild(nombreElement);
            contenedorPanelistas.appendChild(cargoElement);
            contenedorImagenes.appendChild(imagenElement);
        });
    });
}

// Llamar a la función para cargar los panelistas del bloque correspondiente cuando la página esté completamente cargada
window.addEventListener('DOMContentLoaded', function() {
    // Determinar qué bloque de panelistas cargar según la página actual
    const paginaActual = window.location.pathname;
    let bloquePanelistas;

    if (paginaActual.includes("alfonsojimenez.html")) {
        bloquePanelistas = "bloque1";
    } else if (paginaActual.includes("juan_manuel.html")) {
        bloquePanelistas = "bloque2";
    }

    // Llamar a la función para cargar los panelistas del bloque correspondiente
    if (bloquePanelistas) {
        cargarPanelistas(bloquePanelistas);
    }
});


















fetch("assets/json/premiados.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        crearTarjetasPremiados(data.premiados);
    })
    .catch(function(error) {
        console.error('Error al cargar el archivo JSON:', error);
    });

function crearTarjetasPremiados(premiados) {
    var contenedorPremiados = document.getElementById('contenedor-panelistas-premiados');

    premiados.forEach(function(premiado) {
        var tarjetaPremiado = document.createElement('div');
        tarjetaPremiado.classList.add('tarjeta_panelista');

        var seccion1 = document.createElement('div');
        seccion1.classList.add('tarjeta_panelista_seccion_1');

        var contenedorFoto = document.createElement('div');
        contenedorFoto.classList.add('contenedor_foto_panelista');
        var imagen = document.createElement('img');
        imagen.classList.add('imagen_panelista');
        imagen.src = premiado.imagen;
        imagen.alt = premiado.nombre;
        contenedorFoto.appendChild(imagen);
        seccion1.appendChild(contenedorFoto);

        var seccion2 = document.createElement('div');
        seccion2.classList.add('tarjeta_panelista_seccion_2');

        var seccion2Texto = document.createElement('div');
        seccion2Texto.classList.add('tarjeta_panelista_seccion_2_texto');
        var titulo = document.createElement('p');
        titulo.classList.add('texto_panelista_titulo');
        titulo.textContent = premiado.nombre;
        var subtitulo = document.createElement('p');
        subtitulo.classList.add('texto_panelista_subtitulo');
        subtitulo.textContent = premiado.cargo;
        seccion2Texto.appendChild(titulo);
        seccion2Texto.appendChild(subtitulo);

        var boton = document.createElement('a');
        boton.classList.add('boton_panelista');
        boton.textContent = 'CONÓCELO';
        boton.href = premiado.pagina;

        seccion2.appendChild(seccion2Texto);
        seccion2.appendChild(boton);

        tarjetaPremiado.appendChild(seccion1);
        tarjetaPremiado.appendChild(seccion2);

        contenedorPremiados.appendChild(tarjetaPremiado);
    });
}