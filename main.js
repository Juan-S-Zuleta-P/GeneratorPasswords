let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()0123456789';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if (numeroDigitado < 8) {
        alert("ERROR, DEBEN SER 8 O MÁS CARACTERES");
        return;
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }
    contraseña.value = password;
    validarSeguridadContrasena(password);
}


contraseña.addEventListener('input', function () {
    let password = contraseña.value;
    validarSeguridadContrasena(password);
});

function validarSeguridadContrasena(password) {
    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';
    let numeros = '0123456789';
    let especiales = '!@#$%^&*()';

    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneEspecial = false;

    if (password.length < 8) {
        contraseña.style.border = '2px solid red';
        alert('Contraseña no segura. Debe tener al menos 8 caracteres.');
        return;
    }

    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];

        if (mayusculas.includes(caracter)) tieneMayuscula = true;
        if (minusculas.includes(caracter)) tieneMinuscula = true;
        if (numeros.includes(caracter)) tieneNumero = true;
        if (especiales.includes(caracter)) tieneEspecial = true;

        if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
            break;
        }
    }

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        contraseña.style.border = '2px solid green';
        alert('Contraseña segura.');
    } else {
        contraseña.style.border = '2px solid red';
        alert('Contraseña no segura. Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.');
    }
}

function limpiar() {
    document.getElementById('cantidad').value = '';
    document.getElementById('contrasena').value = '';
    contraseña.style.border = '';
}








