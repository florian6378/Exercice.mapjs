function nomsmakeStrings(arr) {
    let nomsmakeStringsArray = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === "kayne west") {
            nomsmakeStringsArray.push(arr[i] + " can access The Matrix");
        } else {
            nomsmakeStringsArray.push(arr[i] + " cannot access The Matrix");
        }
    } 

    return nomsmakeStringsArray;
}

function ageITup(arr) {
    let ageArray = [];

    for(let i = 0; i < arr.length; i++) {
        let age = arr[i].toString();
        ageArray.push(age);
    }

    return ageArray;
}

let nomsresult = nomsmakeStrings(["Angelina Jolie", "Éric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]);
let ageresult = ageITup([80, 2, 5, 16, 100]);

console.log(nomsresult);
console.log(ageresult);


