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
    let netto = document.querySelector('input[id="n-zu-b"]');
    let brutto = document.querySelector('input[id="b-zu-n"]');

    let inputBetrag = document.getElementById('inputBetrag').valueAsNumber;
    // console.log(typeof inputBetrag);

    let mwstBetrag
    let endPreis


    if (netto.checked && steuerSatz19.checked) {
        mwstBetrag = Number((inputBetrag * 0.19)).toFixed(2);
        document.getElementById('mwstBetrag').innerHTML = mwstBetrag + " €";
        endPreis = Number((inputBetrag + (inputBetrag * 0.19))).toFixed(2);
        document.getElementById('endPreis').innerHTML = endPreis + " €";
    } 
    else if (netto.checked && steuerSatz7.checked) {
        mwstBetrag = Number((inputBetrag * 0.07)).toFixed(2);
        document.getElementById('mwstBetrag').innerHTML = mwstBetrag + " €";
        endPreis = Number(inputBetrag + (inputBetrag * 0.07)).toFixed(2);
        document.getElementById('endPreis').innerHTML = endPreis + " €";
    }    
    else if (brutto.checked && steuerSatz19.checked) {
        endPreis = Number((inputBetrag / 1.19)).toFixed(2);
        document.getElementById('endPreis').innerHTML = endPreis + " €";           
        mwstBetrag = Number((inputBetrag - endPreis)).toFixed(2); 
        document.getElementById('mwstBetrag').innerHTML = mwstBetrag + " €";
    }
    else if (brutto.checked && steuerSatz7.checked) {
        endPreis = Number((inputBetrag / 1.07)).toFixed(2);
        document.getElementById('endPreis').innerHTML = endPreis + " €";
        let mwstBetrag = Number((inputBetrag - endPreis)).toFixed(2); 
        document.getElementById('mwstBetrag').innerHTML = mwstBetrag + " €";
    }
}

berechnung();
