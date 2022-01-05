inicio = document.querySelector('#inicio');
output = document.querySelector('output');
intent = document.querySelector('#intento');
input = document.querySelector('input');
inicio.addEventListener('click', ev => {
    adivinar = new AdivinaElNumero();
    output.innerText = "Has empezado de nuevo, introduce un número del 1 al 100"
    });
    intent.addEventListener('click', ev => {
        intento = input.value;
        adivinar.intentar(intento);
    }
);