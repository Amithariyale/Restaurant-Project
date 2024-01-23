const foodItems = document.getElementById("food_items");
let foodData = []; //initialising foodData array to hold fetched data.

// getMenu function
async function getMenu() {
  try {
    const responce = await fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    );
    const data = await responce.json();
    showMenu(data);
    const data2 = await takeOrder();
    const data3 = await orderPrep(data2);
    const data4 = await payOrder(data3);
    thankYouFnc();
  } catch (err) {
    console.log(err);
  }
}

// showMenu function to map the foodData on HTML page.
function showMenu(data) {
  foodData = data;
  foodData.map((item) => {
    foodItems.innerHTML += `
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
}

// takeOrder Function to take the  orders.
function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomBurgers = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * foodData.length);
        randomBurgers.push(foodData[randomIndex]);
      }
      const order = { burgers: randomBurgers };
      resolve(order);
    }, 2500);
  });
}

// orderPrep function to prep the order.
function orderPrep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orderStatus = { order_status: true, paid: false };
      resolve(orderStatus);
    }, 1500);
  });
}

// payOrder function to make  payment.
function payOrder(orderStatus) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orderStatus = { ...orderStatus, paid: true };
      resolve(orderStatus);
    }, 1000);
  });
}

// Function to display thank you message when order confirmed.
function thankYouFnc() {
  alert("Thank you for eating with us today!");
}

// Chain promises to handle the entire process.
getMenu();
// .then(() => takeOrder())
// .then((order) => orderPrep(order))
// .then((orderStatus) => payOrder(orderStatus))
// .then((orderStatus) => {
//   if (orderStatus.paid) {
//     thankYouFnc();
//   }
// })
// .catch((err) => console.log(err));



