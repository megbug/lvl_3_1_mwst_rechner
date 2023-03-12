console.log("it works");

const displayNetto = () => {
    document.getElementById('betragTitel').innerHTML = "Nettobetrag (Preis ohne Mwst) in Euro <span>*</span>";
    document.getElementById('endPreisTitel').innerHTML = "Bruttobetrag (Endpreis)";
}

const displayBrutto = () => {
    document.getElementById('betragTitel').innerHTML = "Bruttobetrag (Preisinklusive Mehrwertsteuer) in Euro";
    document.getElementById('endPreisTitel').innerHTML = "Nettobetrag";
}

const berechnung = () => {
    let steuerSatz19 = document.querySelector('input[id="neunZehn"]');
    let steuerSatz7 = document.querySelector('input[id="sieben"]');
    // console.log(steuerSatz19.checked);
    // console.log(steuerSatz7.checked);

    let netto = document.querySelector('input[id="n-zu-b"]');
    // console.log(netto.checked);

    let brutto = document.querySelector('input[id="b-zu-n"]');
    // console.log(brutto.checked);

    let inputBetrag = document.getElementById('inputBetrag').valueAsNumber;
    // console.log(typeof inputBetrag);
    // console.log(inputBetrag);

    if (netto.checked && steuerSatz19.checked) {
        let mwstBetrag = Number((inputBetrag * 0.19)).toFixed(2);
        document.getElementById('mwstBetrag').innerHTML = mwstBetrag + " €";
        let endPreis = Number((inputBetrag + (inputBetrag * 0.19))).toFixed(2);
        document.getElementById('endPreis').innerHTML = endPreis + " €";
    } 
    else if (netto.checked && steuerSatz7.checked) {
        let mwstBetrag2 = Number((inputBetrag * 0.07)).toFixed(2);
        document.getElementById('mwstBetrag').innerHTML = mwstBetrag2 + " €";
        let endPreis2 = Number(inputBetrag + (inputBetrag * 0.07)).toFixed(2);
        document.getElementById('endPreis').innerHTML = endPreis2 + " €";
    }    
    else if (brutto.checked && steuerSatz19.checked) {
        let endPreis3 = Number((inputBetrag / 1.19)).toFixed(2);
        document.getElementById('endPreis').innerHTML = endPreis3 + " €";           
        let mwstBetrag3 = Number((inputBetrag - endPreis3)).toFixed(2); 
        document.getElementById('mwstBetrag').innerHTML = mwstBetrag3 + " €";
    }
    else if (brutto.checked && steuerSatz7.checked) {
        let endPreis4 = Number((inputBetrag / 1.07)).toFixed(2);
        document.getElementById('endPreis').innerHTML = endPreis4 + " €";
        let mwstBetrag4 = Number((inputBetrag - endPreis4)).toFixed(2); 
        document.getElementById('mwstBetrag').innerHTML = mwstBetrag4 + " €";
    }
}

berechnung();
