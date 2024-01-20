const foodItems = document.getElementById("food_items");

document.addEventListener("DOMContentLoaded", () => {
  getMenu();
});

function getMenu() {
  let foodData;
  fetch(
    "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
  )
    .then((data) => data.json())
    .then((data) => {
      data.map((item) => {
        foodItems.innerHTML +=
         `
        <div id="${item.id}" class="food_card">
            <img src="${item.imgSrc}" alt="${item.name}">
            <div class="card_text">
                <div>
                    <h3>${item.name}</h3>
                    <p>$${item.price}/-</p>
                </div>
                <div>
                    <i class="fa-solid fa-square-plus"></i>
                </div>
            </div>
        </div>
        `;
      });
    })
    .catch((e) => console.log(e));

  console.log(foodData);
}
