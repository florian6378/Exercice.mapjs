function doubleNumbers(arr) {
    // Créer un nouveau tableau pour stocker les nombres doubles
    let doubledArray = [];

    // Parcourir le tableau d'entrée
    for (let i = 0; i < arr.length; i++) {
        // Doubler chaque élément du tableau d'entrée et l'ajouter au nouveau tableau
        let doubledNumber = arr[i] * 2;
        doubledArray.push(doubledNumber);
    }

    // Retourner le nouveau tableau avec les nombres doublés
    return doubledArray;
}

console.log(doubleNumbers([2, 5, 100])); // Affichera : [4, 10, 200]
