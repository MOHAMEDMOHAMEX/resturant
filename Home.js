var MyData = [];

async function getCategories() {
    var myHttp = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    MyData = await myHttp.json();
    display()
    console.log(MyData);
}
getCategories()

function display() {
    var cartona =``
    for (i = 0; i < MyData.categories.length; i++) {
        cartona += ` <div class="col">
    <div class="card position-relative">
    <img src="${MyData.categories[i].strCategoryThumb}" class="card-img-top" alt="...">
    <div class="caption text-center  position-absolute">

        <a class="text-black" href="details.html"><h3 >${MyData.categories[i].strCategory}</h3></a>
    </div>
  </div>
</div>`
    }
    document.getElementById("test").innerHTML = cartona;
}
