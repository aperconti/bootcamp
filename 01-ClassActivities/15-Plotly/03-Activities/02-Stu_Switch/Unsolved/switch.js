// Switch function
function Converter(letter) {
    switch (letter) {
        case "a":
            console.log(1);
            break;
        case "b":
            console.log(2);
            break;
        case "c":
            console.log(3);
            break;
        case "d":
            console.log(4);
            break;
        case "e":
            console.log(5);
            break;
        default:
            console.log("please enter a letter A - E");
            break;
    }

}

Converter("d");