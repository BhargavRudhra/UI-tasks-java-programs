fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
    res => {
      res.json().then(
        data => {
          console.log(data.drinks);
          if (data.drinks.length > 0) {
  
            var temp = "";
            data.drinks.forEach((itemData) => {
              temp += "<tr>";
              temp += "<td>" + itemData.idDrink + "</td>";
              temp += "<td>" + itemData.strDrink + "</td>";
              temp += "<td>" + itemData.strCategory + "</td></tr>";
            });
            document.getElementById('data').innerHTML = temp;
          }
        }
      )
    }
    
  )