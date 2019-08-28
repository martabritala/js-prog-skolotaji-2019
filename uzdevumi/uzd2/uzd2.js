
// mas.splice(a,b,c1,c2,c3); return izrautie vietā a, daudzumā b, pēc tam masīvā vietā a ievieto c1, c2, c3...

function pievienotBeigas()
{
    let vertiba=prompt("Ko vēlaties beigās pievienot?");
    mas.push(vertiba);
    drukat();
}

function iznemtNoBeigam(){
    let izmestais = mas.pop();
    drukat();
    return izmestais;
}

function drukat(){
    document.getElementById("root").innerHTML="Jūsu masīvs tagad: "+mas.toString();
}

function iestarpinat()
{
    let indekss=parseInt(prompt("Kurā indeksā ievietot?"));
    let vertiba=prompt("Ko vēlaties ievietot?");
    mas.splice(indekss,0,vertiba);
    drukat();
}

function iznemt(){
    let indekss=parseInt(prompt("No kuras vietas vēlaties izņemt elementu?"));
    mas.splice(indekss,1);
    drukat();
}