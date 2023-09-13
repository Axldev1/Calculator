/* agrega a la pantalla lo que toques en los botones de la calculadora */
function calculator(valor){
    let output = document.getElementById('output-value');

    // valor actual de la pantalla
    let currentValue = output.textContent;

    // concatena el valor del boton al boton actual
    currentValue += valor;

    //contenido de la pantalla con el nuevo valor
    output.textContent = currentValue;
}
function clearScreen() {
    let output = document.getElementById('output-value');
    output.textContent = '';
}
function calculate(){
    let output = document.getElementById('output-value');
    let currentValue = output.textContent;
    
    let result = eval(currentValue);
    output.textContent = result;
}