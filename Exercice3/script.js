// Mettre en majuscule chacun d'un tableau de noms

function majusculeNamesITuP(arr){

let majusculeNamesArray = [];

for(let i = 0; i < arr.length; i++) {


    let majusculeNames = arr[i].toUpperCase();
    majusculeNamesArray.push(majusculeNames);
}
    return majusculeNamesArray;


}

// Le résultat dans une variable pour afficher correctement

let result = majusculeNamesITuP(["John", "Jacob", "Jingleheimer", "Schmidt"]);

// Afficher chaque éllément du tableau résultant

for(let j= 0; j < result.length; j++) {


console.log(result[j]);

}