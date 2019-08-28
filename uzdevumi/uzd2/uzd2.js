let mas=[];

// mas.splice(a,b,c1,c2,c3); return izrautie vietā a, daudzumā b, pēc tam masīvā vietā a ievieto c1, c2, c3...

function pievienotBeigas(vertiba){
    mas.push(vertiba);
}

function iznemtNoBeigam(){
    return mas.pop();
}

function drukat(){
    document.getElementById("root").innerHTML=mas.toString
}

function iestarpinat(indekss, vertiba){
    mas.splice(indekss,0,vertiba);
}

function iznemt(indekss){
    mas.splice(indekss,1);
}