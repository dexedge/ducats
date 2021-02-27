/*
Gulden and ducat calculator (Bootstrap), JavaScript
Version 0.21
Dexter Edge
2018-09-11
Updated: 2021-02-27

The approach used for this calculator is based on the underlying HTML and JavaScript (not the 'Try It' code) at the page https://www.w3schools.com/howto/howto_js_weight_converter.asp
*/

// Clear Form
// var clearButton = document.querySelector('#b');

var inputs = document.querySelectorAll("input");

function clearForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function guldenConverter(source, inputValue) {
    var gulden = document.querySelector("#gulden");
    var kreuzer = document.querySelector("#kreuzer");
    var totalkreuzer = document.querySelector("#totalkreuzer");

    var kremnitz1763 = document.querySelector("#kremnitz-1763");
    var kaiserlich1763 = document.querySelector("#kaiserlich-1763");
    var ordinary1763 = document.querySelector("#ordinary-1763");

    var kremnitz1771 = document.querySelector("#kremnitz-1771");
    var kaiserlich1771 = document.querySelector("#kaiserlich-1771");
    var ordinary1771 = document.querySelector("#ordinary-1771");

    var kremnitz1783 = document.querySelector("#kremnitz-1783");
    var kaiserlich1783 = document.querySelector("#kaiserlich-1783");
    var ordinary1783 = document.querySelector("#ordinary-1783");

    var kremnitz1786 = document.querySelector("#kremnitz-1786");
    var kaiserlich1786 = document.querySelector("#kaiserlich-1786");

    var value = 0; // Temporary numeric variable for total kreuzer

    // Allow only digits (no minus sign allowed)
    if (!/[0-9]+/.test(inputValue)) {
        document.querySelector("#converter").reset();
    }

    inputValue = parseFloat(inputValue);

    if (source == "gulden") {
        value = inputValue * 60 + Number(kreuzer.value);
        totalkreuzer.value = value;

        kremnitz1763.value = ((inputValue * 60)/252).toFixed(2);
        kaiserlich1763.value = ((inputValue * 60)/250).toFixed(2);
        ordinary1763.value = ((inputValue * 60)/247.5).toFixed(3);

        kremnitz1771.value = ((inputValue * 60)/258).toFixed(2);
        kaiserlich1771.value = ((inputValue * 60)/256).toFixed(2);
        ordinary1771.value = ((inputValue * 60)/254).toFixed(2);

        kremnitz1783.value = ((inputValue * 60)/262).toFixed(2);
        kaiserlich1783.value = ((inputValue * 60)/260).toFixed(2);
        ordinary1783.value = ((inputValue * 60)/258).toFixed(2);

        kremnitz1786.value = ((inputValue * 60)/270).toFixed(2);
        kaiserlich1786.value = ((inputValue * 60)/270).toFixed(2);
    }
    if (source == "kreuzer") {
        value =  Number(gulden.value) * 60 + inputValue;
        totalkreuzer.value = value;

        kremnitz1763.value = (value/252).toFixed(2);
        kaiserlich1763.value = (value/250).toFixed(2);
        ordinary1763.value = (value/247.5).toFixed(3);

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }

    if (source == "totalkreuzer") {
        gulden.value = Math.floor(inputValue/60);
        kreuzer.value = (inputValue % 60).toFixed(2);

        kremnitz1763.value = (inputValue/252).toFixed(2);
        kaiserlich1763.value = (inputValue/250).toFixed(2);
        ordinary1763.value = (inputValue/247.5).toFixed(3);

        kremnitz1771.value = (inputValue/258).toFixed(2);
        kaiserlich1771.value = (inputValue/256).toFixed(2);
        ordinary1771.value = (inputValue/254).toFixed(2);

        kremnitz1783.value = (inputValue/262).toFixed(2);
        kaiserlich1783.value = (inputValue/260).toFixed(2);
        ordinary1783.value = (inputValue/258).toFixed(2);

        kremnitz1786.value = (inputValue/270).toFixed(2);
        kaiserlich1786.value = (inputValue/270).toFixed(2);
    }

    if (source == "kremnitz-1763") {
        value = inputValue * 252;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kaiserlich1763.value = (value/250).toFixed(2);
        ordinary1763.value = (value/247.5).toFixed(3);

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "kaiserlich-1763") {
        value = inputValue * 250;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1763.value = (value/252).toFixed(2);
        ordinary1763.value = (value/247.5).toFixed(3);

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "ordinary-1763") {
        value = inputValue * 247.5;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1763.value = (value/252).toFixed(2);
        kaiserlich1763.value = (value/250).toFixed(2);

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }

    if (source == "kremnitz-1771") {
         value = inputValue * 258;
         totalkreuzer.value = value;
         gulden.value = Math.floor(value/60);
         kreuzer.value = value % 60;

         kremnitz1763.value = (value/252).toFixed(2);
         kaiserlich1763.value = (value/250).toFixed(2);
         ordinary1763.value = (value/247.5).toFixed(3);

         kaiserlich1771.value = (value/256).toFixed(2);
         ordinary1771.value = (value/254).toFixed(2);

         kremnitz1783.value = (value/262).toFixed(2);
         kaiserlich1783.value = (value/260).toFixed(2);
         ordinary1783.value = (value/258).toFixed(2);

         kremnitz1786.value = (value/270).toFixed(2);
         kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "kaiserlich-1771") {
         value = inputValue * 256;
         totalkreuzer.value = value;
         gulden.value = Math.floor(value/60);
         kreuzer.value = value % 60;

         kremnitz1763.value = (value/252).toFixed(2);
         kaiserlich1763.value = (value/250).toFixed(2);
         ordinary1763.value = (value/247.5).toFixed(3);

         kremnitz1771.value = (value/258).toFixed(2);
         ordinary1771.value = (value/254).toFixed(2);

         kremnitz1783.value = (value/262).toFixed(2);
         kaiserlich1783.value = (value/260).toFixed(2);
         ordinary1783.value = (value/258).toFixed(2);

         kremnitz1786.value = (value/270).toFixed(2);
         kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "ordinary-1771") {
         value = inputValue * 254;
         totalkreuzer.value = value;
         gulden.value = Math.floor(value/60);
         kreuzer.value = value % 60;

         kremnitz1763.value = (value/252).toFixed(2);
         kaiserlich1763.value = (value/250).toFixed(2);
         ordinary1763.value = (value/247.5).toFixed(3);

         kremnitz1771.value = (value/258).toFixed(2);
         kaiserlich1771.value = (value/256).toFixed(2);

         kremnitz1783.value = (value/262).toFixed(2);
         kaiserlich1783.value = (value/260).toFixed(2);
         ordinary1783.value = (value/258).toFixed(2);

         kremnitz1786.value = (value/270).toFixed(2);
         kaiserlich1786.value = (value/270).toFixed(2);
    }

    if (source == "kremnitz-1783") {
        value = inputValue * 262;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1763.value = (value/252).toFixed(2);
        kaiserlich1763.value = (value/250).toFixed(2);
        ordinary1763.value = (value/247.5).toFixed(3);

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "kaiserlich-1783") {
        value = inputValue * 260;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1763.value = (value/252).toFixed(2);
        kaiserlich1763.value = (value/250).toFixed(2);
        ordinary1763.value = (value/247.5).toFixed(3);

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "ordinary-1783") {
        value = inputValue * 258;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1763.value = (value/252).toFixed(2);
        kaiserlich1763.value = (value/250).toFixed(2);
        ordinary1763.value = (value/247.5).toFixed(3);

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
        kaiserlich1786.value = (value/270).toFixed(2);
    }

    if (source == "kremnitz-1786") {
        value = inputValue * 270;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1763.value = (value/252).toFixed(2);
        kaiserlich1763.value = (value/250).toFixed(2);
        ordinary1763.value = (value/247.5).toFixed(3);

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kaiserlich1786.value = (value/270).toFixed(2);
    }
    if (source == "kaiserlich-1786") {
        value = inputValue * 270;
        totalkreuzer.value = value;
        gulden.value = Math.floor(value/60);
        kreuzer.value = value % 60;

        kremnitz1763.value = (value/252).toFixed(2);
        kaiserlich1763.value = (value/250).toFixed(2);
        ordinary1763.value = (value/247.5).toFixed(3);

        kremnitz1771.value = (value/258).toFixed(2);
        kaiserlich1771.value = (value/256).toFixed(2);
        ordinary1771.value = (value/254).toFixed(2);

        kremnitz1783.value = (value/262).toFixed(2);
        kaiserlich1783.value = (value/260).toFixed(2);
        ordinary1783.value = (value/258).toFixed(2);

        kremnitz1786.value = (value/270).toFixed(2);
    }
}
