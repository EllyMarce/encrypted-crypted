let textInput = document.getElementById("yourtext");
let messageEmpty = document.getElementsByClassName("message-empty");
let message = document.getElementById("message");




function cleanText() {

    if(textInput.value === "Digite seu texto"){
        textInput.value = "";
        textInput.rows = 1;

    }
}

document.getElementById("yourtext").addEventListener("input", function() {
    textInput.style.height = 'auto'; // Redefine a altura
    textInput.style.height = (textInput.scrollHeight) + 'px'; // Define a altura conforme o conteúdo
});


function clickCriptografar(){
    if (textInput.value != "Digite seu texto") {
        const paragrafo = document.querySelector("p");
        const headingThree = document.querySelector("h3");

        const image = document.getElementById("girl-image");

        if(image != null) {
            image.remove();
        }

        paragrafo.textContent = null;
        headingThree.textContent = null;

        //criptografando textos:

        if (textInput.value != "") {
            function criptografar(message) {
                let codes = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
                message = message.toLowerCase();

                for (let i = 0; i < codes.length; i++) {
                    message = message.replaceAll(codes[i][0], codes[i][1]);
                }

                return message;
            }

            let messageright = criptografar(textInput.value);

            message.textContent = messageright; // Atualiza o conteúdo da mensagem com o texto criptografado
        }
    }

}


function clickDescriptografar(){
    if (textInput.value != "Digite seu texto"){
        let value = textInput.value; 
        valueString = value.toLowerCase();

        const paragrafo = document.querySelector("p");
        const headingThree = document.querySelector("h3");

        const image = document.getElementById("girl-image");

        if(image != null) {
            image.remove();
        }

        paragrafo.textContent = null;
        headingThree.textContent = null;

        //descriptografando textos:
        if (textInput.value != "") {
            function descriptografar(message) {
                let codes = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
                message = message.toLowerCase();

                for (let i = 0; i < codes.length; i++) {
                    message = message.replaceAll(codes[i][0], codes[i][1]);
                }

                return message;
            }

            let messageright = descriptografar(textInput.value);

            message.textContent = messageright; // Atualiza o conteúdo da mensagem com o texto criptografado
        }
    }

}






