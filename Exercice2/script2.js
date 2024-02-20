function stringItUp(arr) {
    let stringArray = [];

    for (var i = 0; i < arr.length; i++) {
        var stringNumber = arr[i].toString();
        stringArray.push(stringNumber);
    }

    return stringArray;
}

// Stocker le résultat dans une variable pour l'afficher correctement
let result = stringItUp([2, 5, 100]);

// Afficher chaque élément du tableau résultant
for (let j = 0; j < result.length; j++) {
    console.log(result[j]);
}
