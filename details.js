var MyData = [];

async function getIngredients() {
    var myHttp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
    MyData = await myHttp.json();

    console.log(MyData);
}
getIngredients()

// function display(idMeal) {
//     var cartona =``
//     for (i = 0; i < MyData.categories.length; i++) {
//         cartona += ` <div class="col">
//     <div class="card position-relative">
//     <img src="${MyData.categories[i].strCategoryThumb}" class="card-img-top" alt="...">
//     <div class="caption text-center  position-absolute">
//         <h3 >${MyData.categories[i].strCategory}</h3>
//         <a class="text-black" href="index.html"><p class="lead">${MyData.categories[i].strCategoryDescription}</p></a>
//     </div>
//   </div>
// </div>`
//     }
//     document.getElementById("test").innerHTML = cartona;
// }
