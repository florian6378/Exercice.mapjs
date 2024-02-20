function nomsOnlyITuP(arr) {
    let nomsOnlyArray = [];

    for(let i = 0; i < arr.length; i++) {
        nomsOnlyArray.push(arr[i]);
    }

    return nomsOnlyArray;
}

function ageITup(arr) {
    let ageArray = [];

    for(let i = 0; i < arr.length; i++) {
        let age = arr[i].toString();
        ageArray.push(age);
    }

    return ageArray;
}

let nomsResult = nomsOnlyITuP(["Angelina Jolie", "Éric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]);
let ageResult = ageITup([80, 2, 5, 16, 100]);

console.log(nomsResult);
console.log(ageResult);
