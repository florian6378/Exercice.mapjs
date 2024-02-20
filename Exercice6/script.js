// 6) Créez un tableau des noms en h1s et des âges en h2s
function  readyToPutInTheDOM(arr){
    
    let resultArray = [];

    for(let i= 0; i < arr.length; i++){
        let nom = arr[i].nom;
        let age = arr[i].âge;

        let htmlString = "<h1>" + nom + "</h1><h2>" + age + "</h2>";

        resultArray.push(htmlString);

    }

    return resultArray;

  }
  console.log(readyToPutInTheDOM([
      {
          nom : "Angelina Jolie",
          âge: 80
      },
      {
          nom : "Éric Jones",
          âge: 2
      },
      {
          nom : "Paris Hilton",
          âge: 5
      },
      {
          nom : "Kayne West",
          âge: 16
      },
      {
          nom: "Bob Ziroll",
          âge: 100
      }
  ]));
  