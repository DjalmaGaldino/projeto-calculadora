// DarkModel

darkmode = () =>{

    document.getElementById("cabecalho").style.backgroundColor = "#333333";
    document.getElementById("corpo1").style.backgroundColor = "#666666";
    document.getElementById("button").style.backgroundColor = "#000000";
    document.getElementById("button").style.color = "#ffffff";
    document.getElementById("corpo2").style.backgroundColor = "#4C1130";
    document.getElementById("corpo3").style.backgroundColor = "#20124D";
    document.getElementById("rodape").style.backgroundColor = "#000000";
    document.querySelector("body").style.color = "#ffffff";
    
    }
    
    cleanmode = () => {
    
    document.getElementById("cabecalho").style.backgroundColor = "#E06666";
    document.getElementById("corpo1").style.backgroundColor = "#ffdac9";
    document.getElementById("button").style.backgroundColor = "#E06666";

    document.getElementById("button").style.color = "#ffffff";

    document.getElementById("corpo2").style.backgroundColor = "#D5A6BD";

    document.getElementById("button").style.color = "#";

    document.getElementById("corpo3").style.backgroundColor = " #8E7CC3";
    
    document.getElementById("rodape").style.backgroundColor = "#D5A6BD";
    document.querySelector("body").style.color = "#fff";
    
    }
    
    
    //  -> Calculadora 
    
    // -> 2
    
    function soma() {
        let n1 = Number(document.getElementById("valor1").value);
        let n2 = Number(document.getElementById("valor2").value);
    document.getElementById("resultado").value = n1 + n2;
    }  
    
    function subtracao() {
        let n1 = Number(document.getElementById("valor1").value);
        let n2 = Number(document.getElementById("valor2").value);
    document.getElementById("resultado").value = n1 - n2;
    }  
    
    function mult() {
        let n1 = Number(document.getElementById("valor1").value);
        let n2 = Number(document.getElementById("valor2").value);
    document.getElementById("resultado").value = n1 * n2;
    }  
         
    function div() {
        let n1 = Number(document.getElementById("valor1").value);
        let n2 = Number(document.getElementById("valor2").value);
    document.getElementById("resultado").value = n1 / n2;
    }  
    
    // -> 3
    
    function percent() {
        let n1 = Number(document.getElementById("valor1").value);
        let n2 = Number(document.getElementById("valor2").value);
        
    document.getElementById("resultado").value = (n1 * n2)/100;
    } 
    
    function quadradoA() {
        let n1 = Number(document.getElementById("valor1").value);
        let n2 = Number(document.getElementById("valor2").value);
        
    document.getElementById("resultado").value = Math.pow(n1,2);
    } 
    
    function quadradoB() {
        let n1 = Number(document.getElementById("valor1").value);
        let n2 = Number(document.getElementById("valor2").value);
        
    document.getElementById("resultado").value = Math.pow(n2,2);
    } 
    
    function potencia() {
        let n1 = Number(document.getElementById("valor1").value);
        let n2 = Number(document.getElementById("valor2").value);
        
    document.getElementById("resultado").value = Math.pow(n1,n2);
    } 
    
    
    // -> Conversor
    
    function money() {
    
        var valor = parseFloat(document.getElementById("real").value);
        var selecionar = document.getElementById("cambio");
        var opcoes = parseInt(selecionar.selectedIndex);
    
    
        if(opcoes == 1){
            document.getElementById("result").value= (valor / 6.43).toFixed(2);
        } 
        else if(opcoes == 2){
            document.getElementById("result").value=  (valor / 5.23).toFixed(2);
        }
        else if(opcoes == 3){
            document.getElementById("result").value= (valor / 7.32).toFixed(2);
        }      
    }
    
    
    function tmp() {
    
        var temperatura = parseFloat(document.getElementById("graus").value);
        var selecionar = document.getElementById("temperatura");
        var opcoes = parseInt(selecionar.selectedIndex);
    
    
        if(opcoes==1){
            document.getElementById("restemp").value= (9 * temperatura / 5) + 32;
        } 
        else if(opcoes==2){
            document.getElementById("restemp").value= 273.15 + temperatura;
        }
    }
       
    var tamanho = 14;
    function diminuir() {
        tamanho --;
        document.body.style.fontSize = tamanho +"px";
    }
    function aumentar() {
        tamanho ++;
        document.body.style.fontSize = tamanho +"px";
    }