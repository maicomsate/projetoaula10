let paragrafo = document.getElementById('corpo');

function sumir() {
   
    if (paragrafo.innerText === "Corpo do texto, esse é apenas um exemplo simples de legenda para o texto no card, quando precisar trocar o texto, basta trocar.") {
        paragrafo.innerText = "";  
        document.getElementById('vizualp').src = "/img/eye-off.png";  
         document.getElementById('foto').src = ""
    } else {
        paragrafo.innerText = "Corpo do texto, esse é apenas um exemplo simples de legenda para o texto no card, quando precisar trocar o texto, basta trocar."; 
        document.getElementById('vizualp').src = "/img/eye.png"; 
        document.getElementById('foto').src = "img/tech-devices-and-icons-connected-to-digital-planet-earth-2-scaled.jpg"
    }
}

    const ligarSeta = () => {
    document.getElementById('seta').addEventListener('mouseover', arrow);
    document.getElementById('seta').src = "img/Vector 1.png"
};
    const desligarSeta = () => {
    document.getElementById('seta').removeEventListener('mouseover', arrow);
    document.getElementById('seta').src = ""
};
    function arrow(){
        document.getElementById('seta').src = "img/Vector 1.png"

    }