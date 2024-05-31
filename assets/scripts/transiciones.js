window.addEventListener('scroll', function() {
    var parrafo = document.getElementById('parrafo');
    var rect = parrafo.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      parrafo.classList.add('mover_izquierda');
    } else {
      parrafo.classList.remove('mover_izquierda');
    }
  });

  window.addEventListener('scroll', function() {
    var parrafo_2 = document.getElementById('parrafo_2');
    var rect = parrafo_2.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top <= windowHeight && rect.bottom >= 0) {
        parrafo_2.classList.add('mover_izquierda_2');
    } else {
        parrafo_2.classList.remove('mover_izquierda_2');
    }
  });

  window.addEventListener('scroll', function() {
    var parrafo_3 = document.getElementById('parrafo_3');
    var rect = parrafo_3.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top <= windowHeight && rect.bottom >= 0) {
        parrafo_3.classList.add('mover_izquierda_3');
    } else {
        parrafo_3.classList.remove('mover_izquierda_3');
    }
  });

  window.addEventListener('scroll', function() {
    var parrafo_4 = document.getElementById('parrafo_4');
    var rect = parrafo_4.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top <= windowHeight && rect.bottom >= 0) {
        parrafo_4.classList.add('mover_izquierda_4');
    } else {
        parrafo_4.classList.remove('mover_izquierda_4');
    }
  });

  window.addEventListener('scroll', function() {
    var parrafo_5 = document.getElementById('parrafo_5');
    var rect = parrafo_5.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top <= windowHeight && rect.bottom >= 0) {
        parrafo_5.classList.add('mover_izquierda_5');
    } else {
        parrafo_5.classList.remove('mover_izquierda_5');
    }
  });