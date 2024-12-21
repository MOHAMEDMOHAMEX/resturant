var MyData_Area = [];

async function getArea() {
    var myHttp = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    MyData_Area = await myHttp.json();
    display_Area()
    console.log(MyData_Area);
}
getArea()

function display_Area() {
    var cartona =``
    for (i = 0; i < MyData_Area.meals.length; i++) {
        cartona += `<div class="col">
        <div class="card">
        <i class="fa-solid fa-house-laptop fa-4x"></i>
     
        <a class="text-black" href="index.html"><h3>${MyData_Area.meals[i].strArea}</h3></a>
        </div>
      </div>`
    }
    document.getElementById("Area").innerHTML = cartona;
}
