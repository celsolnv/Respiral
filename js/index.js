var eixoYinicial = 0 //Para iniciar os dados
var dpsFrequencia = [
    {x: 1, y: eixoYinicial}, 
    {x: 2, y: eixoYinicial}, 
    {x: 3, y: eixoYinicial}, 
    {x: 4, y: eixoYinicial}, 
    {x: 5, y: eixoYinicial},
    {x: 6, y: eixoYinicial}, 
    // {x: 7, y: 13}, {x: 8, y: 18},
]; // dataPoints
var dpsPressao = [    
    {x: 1, y: eixoYinicial}, 
    {x: 2, y: eixoYinicial}, 
    {x: 3, y: eixoYinicial}, 
    {x: 4, y: eixoYinicial}, 
    {x: 5, y: eixoYinicial},
    {x: 6, y: eixoYinicial}, 
]; // dataPoints
var dpsFluxo = [
    {x: 1, y: eixoYinicial}, 
    {x: 2, y: eixoYinicial}, 
    {x: 3, y: eixoYinicial}, 
    {x: 4, y: eixoYinicial}, 
    {x: 5, y: eixoYinicial},
    {x: 6, y: eixoYinicial}, 

]; // dataPoints

var intervaloDados = 5; //Espaço dado entre cada ponto 

// Controle de gráfico
var xValPressao = dpsPressao.length + 1;
var xValFrequencia = dpsFrequencia.length + 1;
var xValFluxo = dpsFluxo.length + 1;

// CORES
var corFonteGraficos = "#4dff00"
var corFluxo = "#5F86C9";

var updateInterval = 1000; 

var graficoPressao = new CanvasJS.Chart("graficoPressao",{
    backgroundColor:"#000000",
    data  : [{
        type: "spline",
        color: "#FF0000",
        lineThickness: 1,
        dataPoints: dpsPressao
    }],
    axisX :{
        gridThickness: 0 ,
        labelFontSize: 10 ,
        lineColor: corFonteGraficos,
        interval: intervaloDados
    },
    axisY :{
        lineColor: corFonteGraficos,
        labelFontSize: 10, 
        labelFontColor: corFonteGraficos,
        title: "Pressão (cmH2O)",
        titleFontSize: 15 ,
        titleFontColor:"#ffffff", 
        titleFontWeight: "bold", 
        gridThickness: 0 
    },
    toolTip:{content: "Tempo: {x} s - Pressão {y} cmH2O",fontSize:20}
    
});

var graficoFrequencia= new CanvasJS.Chart("graficoFrequencia",{
    backgroundColor:"#000000",
    data  : [{
        markerType:"circle",
        type: "spline",
        color: corFonteGraficos,
        lineThickness: 1,
        dataPoints: dpsFrequencia
    }],
    axisX :{
        interval: intervaloDados,
        gridThickness:0,
        lineColor: corFonteGraficos,
    },
    axisY :{
        lineColor: corFonteGraficos,
        labelFontSize: 10, 
        labelFontColor: corFonteGraficos,
        title: "F. Resp. (resp/min)",
        titleFontColor:"#ffffff", 
        titleFontSize: 15, 
        titleFontWeight: "bold",
        gridThickness: 0,
    },
    toolTip:{content:"Tempo: {x} min - Frequência: {y} resp"}
});

var graficoFluxo = new CanvasJS.Chart("graficoFluxo",{  
    backgroundColor:"#000000",
    axisX :{
        gridThickness:0 ,
        interval: intervaloDados,
        labelFontColor:"white",
        lineColor:corFluxo

    },
    axisY :{
        labelFontSize: 10,
        labelFontColor: corFluxo,
        lineColor:corFluxo,
        title: "Fluxo (l/min)",
        titleFontSize: 15,
        titleFontColor:"#ffffff", 
        titleFontWeight: "bold",
        gridThickness: 0,
    },
    data  : [
        {type: "spline",
        color: corFluxo,
        lineThickness: 1.5,
        dataPoints: dpsFluxo 
    }],     
    toolTip:{content: "Tempo: {x} s - Fluxo:{y} L/min"}
});

function iniciaGraficos() {
    graficoFrequencia.render();     
    graficoFluxo.render();     
    graficoPressao.render(); 
}
function atualizaGraficos() {
    
    let n1 = Math.floor((Math.random() * 100) + 1);
    let n2 = Math.floor((Math.random() * 100) + 1);
    let n3 = Math.floor((Math.random() * 100) + 1);
    dps.push({y:n1});
    // dps2.push(n2);
    // dps3.push(n3);
    chart.options.data[0].dataPoints.push({y: 23});
    // chart.render();
    passaGrafico();     
    chart2.render();     
    chart3.render();
    console.log("mais uma vez!!")  
      
}

function mediaY(lista) {
    let soma = 0;
    let tamanho = lista.length;
    for (let i = 0; i < tamanho; i++) {
        soma = soma + lista[i]["y"];
    }
    return (soma/tamanho).toFixed(1)
}

function atualizarGraficoFrequencia() {
    let yVal = 0;
    yVal = Math.floor(Math.random() * 100);
    dpsFrequencia.push({x: xValFrequencia,y: yVal,});
    xValFrequencia++;
    if (dpsFrequencia.length > 10 )
    {
        // console.log(dpsFrequencia);
        dpsFrequencia.shift();				
    }
    graficoFrequencia.render();
    document.getElementById("frequenciaValor").innerHTML = mediaY(dpsFrequencia);
 
}
function atualizarGraficoFluxo() {
    let yVal = 0;
    yVal = Math.floor(Math.random() * 100);
    dpsFluxo.push({x: xValFluxo,y: yVal,});
    xValFluxo++;
    if (dpsFluxo.length >  10 )
    {
        dpsFluxo.shift();				
    }
    graficoFluxo.render();
    document.getElementById("fluxoValor").innerHTML = mediaY(dpsFluxo);		
 
}
function atualizarGraficoPressao() {
    let yVal = 0;
    yVal = Math.floor(Math.random() * 100);
    dpsPressao.push({x: xValPressao,y: yVal,});
    xValPressao++;
    if (dpsPressao.length >  10 )
    {
        dpsPressao.shift();				
    }
    graficoPressao.render();	
    document.getElementById("pressaoValor").innerHTML = mediaY(dpsPressao);	
 
}
iniciaGraficos();
setInterval(function(){atualizarGraficoFrequencia()}, updateInterval); 
setInterval(function(){atualizarGraficoFluxo()}, updateInterval); 
setInterval(function(){atualizarGraficoPressao()}, updateInterval); 
