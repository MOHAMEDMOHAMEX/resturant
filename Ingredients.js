var MyData_Ingredients = [];

async function getIngredients() {
    var myHttp = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    MyData_Ingredients = await myHttp.json();
    display_Ingredients()
    console.log(MyData_Ingredients);
}
getIngredients()

function display_Ingredients() {
    var cartona =``
    for (i = 0; i < MyData_Ingredients.meals.length; i++) {
        cartona += `<div class="col">
        <div class="card">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        
        <a class="text-black" href="index.html"><h3>${MyData_Ingredients.meals[i].strIngredient}</h3></a>
        <p>${MyData_Ingredients.meals[i].strDescription}</p>
        </div>
      </div>`
    }
    document.getElementById("Ingredients").innerHTML = cartona;
}
