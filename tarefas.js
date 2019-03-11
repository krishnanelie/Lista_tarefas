function aoCarregar(){
    atualizarData();
    adicionar();
    //setTimeout(() => adicionar(),1000);
}
function atualizarData(){
    var now = new Date();
    var dayName = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
    var monName = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro"]
    document.getElementById("data-hoje").innerHTML="Hoje é " + dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear();
}
function adicionar(){
    var seuNode = document.getElementById('item'); 
    var clone   = seuNode.cloneNode(true);
    clone.removeAttribute("id")
    document.getElementsByClassName("container")[0].appendChild(clone);
}