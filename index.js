"use strict"
var fn_init = function() {
    let lignesCdes = [];
    let clients = [{
        name: "client1",
        code: "Cl1"
    }, {
        name: "client2",
        code: "Cl2"
    }];
    let TVA = [2, 10, 20.6];
    for (let i = 0; i < 10; i++) {
        let idxTVA = Math.round(Math.random() * 2); //Va chercher l'index dans le tableau
        let myTVA = TVA[idxTVA]; //Ajoute la TVA selon l'index donné par idxTVA
        let idxClient = Math.round(Math.random() * (clients.length-1)); //IDEM que pour TVA
        let myClient = clients[idxClient];
        let montHT = Math.round(Math.random() * 1000);
        lignesCdes.push([myClient, myTVA, montHT]); //Incrémente données dans lignesCdes déclarée au début
    }
    return lignesCdes;
}
console.log(fn_init());
