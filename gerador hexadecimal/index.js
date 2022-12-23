const colorInput = document.querySelector("#color");
const hexInput = document.querySelector("#hex");
const buttonCopy = document.querySelector("#button-copy");

colorInput.addEventListener('input', () => {
    const color = colorInput.value;
    hexInput.value = color; 
    document.querySelector('h1').style.color = color;
})

function copyColorHex() {
   navigator.clipboard.writeText(hexInput.value).then(() => {
    alert('Sua cor hexadecimal foi copiada!');
   }); 
}