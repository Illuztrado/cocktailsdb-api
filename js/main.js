//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// https://www.thecocktaildb.com/api.php -> API

document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
    let drink = document.querySelector('input').value;
    console.log(drink);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data);
          document.querySelector('h2').innerText = "Getting your drinks from the database...";
          document.querySelector('h4').innerText = data.drinks.length + " results";
          let i = 0;
          let intervalId = setInterval(() => {
            // if(i === data.drinks.length-1) {
            //   clearInterval(intervalId);
            // }
            document.querySelector('h2').innerText = `${i+1}. ${data.drinks[i].strDrink}`;
            document.querySelector('img').src = data.drinks[i].strDrinkThumb;
            document.querySelector('p').innerText = data.drinks[i].strInstructions;

            i++;
            if(i === data.drinks.length) {
              i = 0;
            }
          }, 5000);
          // document.querySelector('h2').innerText = data.drinks[0].strDrink;
          // document.querySelector('img').src = data.drinks[0].strDrinkThumb;
          // document.querySelector('p').innerText = data.drinks[0].strInstructions;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}