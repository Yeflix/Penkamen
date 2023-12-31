let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputVictor = document.getElementById('victor')
    let inputCesa = document.getElementById('cesa')
    let inputAleatorio = aleatorio (1,6)
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge (Jugador)'
    alert("Seleccionaste a Hipodoge")
}
    else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo (Jugador)'
    alert("Seleccionaste a Capipepo")
}
    else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya (Jugador)'
    alert("Seleccionaste a Ratigueya")

}   else if (inputVictor.checked) {
    spanMascotaJugador.innerHTML = 'Victor (Jugador)'
    alert("Seleccionaste a Victor")

}   else if (inputCesa.checked) {
    spanMascotaJugador.innerHTML = 'Cesa (Jugador)'
    alert("Seleccionaste a Cesa")

}  else if (inputAleatorio == 1 ) {
    spanMascotaJugador.innerHTML = 'Hipodoge (Jugador)'
    alert("No seleccionaste ninguna mascota... Seleccionaremos una por ti.")

}   else if (inputAleatorio ==  2) {
    spanMascotaJugador.innerHTML = 'Ratigueya  (Jugador)'
    alert("No seleccionaste ninguna mascota... Seleccionaremos una por ti.")

}   else if (inputAleatorio == 3) {
    spanMascotaJugador.innerHTML = 'Capipepo  (Jugador)'
    alert("No seleccionaste ninguna mascota... Seleccionaremos una por ti.")

}   else if (inputAleatorio == 4 ) {
    spanMascotaJugador.innerHTML = 'Victor  (Jugador)'
    alert("No seleccionaste ninguna mascota... Seleccionaremos una por ti.")

}   else if (inputAleatorio == 5 ) {
    spanMascotaJugador.innerHTML = 'Cesa  (Jugador)'
    alert("No seleccionaste ninguna mascota... Seleccionaremos una por ti.")

}
seleccionarMascotaEnemigo ()  
}


function seleccionarMascotaEnemigo() {
    let MokeponEnemigo = aleatorio (1,4)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (MokeponEnemigo == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge (Enemigo)'

    }   else if (MokeponEnemigo == 2 ) {
        spanMascotaEnemigo.innerHTML = 'Capipepo (Enemigo)'

    }   else if (MokeponEnemigo == 3 ) {
        spanMascotaEnemigo.innerHTML = 'Victor (Enemigo)'
    }
        else 
    {
        spanMascotaEnemigo.innerHTML = 'Ratigueya (Enemigo)'
}
}
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
  
    ataqueJugador = 'AGUA'
    
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
        
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("El enemigo y tu han empatado")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
      
        crearMensaje("Le Has restado 1 punto de vida al enemigo.")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("Le Has restado 1 punto de vida al enemigo.")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
      
        crearMensaje("Le Has restado 1 punto de vida al enemigo.")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("El enemigo te ha restado 1 punto de vida")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
    
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
    
    
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataque-del-jugador')
    
    let ataquesDelEnemigo = document.getElementById('ataque-del-enemigo')
    
   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
   
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
   
}


function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego)
