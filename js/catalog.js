/*-----------------------------------------------------------------
                              ARRAYS
-----------------------------------------------------------------*/
const PRODUCTS_ARRAY = [
    {
        id: 0,
        image: "https://images.unsplash.com/photo-1591056076251-514f3c9368a4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
        name: "bouquet 01",
        price: 45,
        inCart: 0,
    },
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1557925923-6885735abfb1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388",
        name: "bouquet 02",
        price: 49,
        inCart: 0,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1556269975-7cc2cbc82480?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
        name: "bouquet 03",
        price: 35,
        inCart: 0,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
        name: "bouquet 04",
        price: 75,
        inCart: 0,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1557925923-6885735abfb1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388",
        name: "bouquet 05",
        price: 80,
        inCart: 0,
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1539346254710-b6d86e095035?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
        name: "bouquet 06",
        price: 63,
        inCart: 0,
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1539073602199-a078932952bd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
        name: "bouquet 07",
        price: 45,
        inCart: 0,
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1541792529698-03020b773b3b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
        name: "bouquet 08",
        price: 72,
        inCart: 0,
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1592309487290-2cf1e17b4623?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
        name: "bouquet 09",
        price: 35,
        inCart: 0,
    },
]

/*-----------------------------------------------------------------
                            Variables
-----------------------------------------------------------------*/
var favorites_number = 0;
var cart_number = 0;
const SHOPPING_CART = [];
const CART_NUMBER_CONTAINER = document.getElementById("cart-number-container");

/*-----------------------------------------------------------------
                            Functions
-----------------------------------------------------------------*/
/* ---- Display all products ----- */
function Products() {
    let products_list = document.getElementById('products');
    products_list.innerHTML = '';

    const items =  PRODUCTS_ARRAY?.map((product) => {
        products_list.innerHTML +=
            `<div class="single-product">
                <button class="add-to-favorite" onclick="AddToFavorite()"><img src="../assets/images/icons/white-heart.svg" alt="white-heart" /></button>
                <img class="product-img" src=${product.image} alt=${product.name} />
                <div class="product-info flex justify-between">
                    <h4 class="product-name"> ${product.name} </h4>
                    <h4 class="product-price"> $${product.price} </h4>
                </div>
                <div class="add-to-cart-hover flex flex-column justify-center items-center">
                    <button class="view-button">VIEW</button>
                    <button class="add-to-cart-button">ADD TO CART</button>
                </div>
            </div>`
        }
    ).join('');

    return items;
}

/* ---- Add to favorites ---- */
// @TO DO : check if its clicked disable the button
// add to favorite is allowed only once
function AddToFavorite() {
    const FAVORITE_NUMBER_CONTAINER = document.getElementById("favorite-number-container");
    favorites_number += 1;
    if (favorites_number >= 1) {
        FAVORITE_NUMBER_CONTAINER.classList.add("heart-icon");
    } else {
        FAVORITE_NUMBER_CONTAINER.classList.add("remove-element");
    }
    FAVORITE_NUMBER_CONTAINER.innerHTML = favorites_number;
    return '';
}



/* ---- Add to cart onclick ---- */
function ManageCart() {
    const ADD_TO_CART_BUTTONS_ARRAY = document.querySelectorAll('.add-to-cart-button');
        for(let i = 0; i<PRODUCTS_ARRAY.length; i++) {
            ADD_TO_CART_BUTTONS_ARRAY[i].addEventListener("click", function(){
            AddToCart(PRODUCTS_ARRAY[i]);
        })
    }
    return '';
}

/* ---- Check cart after loading ---- */
// save the number of added to bag products 
// even after loading page 
function OnloadPage() {
    let QUANTITY_CART_ITEMS = localStorage.getItem("qty_cartItems");

    if (QUANTITY_CART_ITEMS) {
        CART_NUMBER_CONTAINER.classList.add("cart-icon");
        CART_NUMBER_CONTAINER.innerHTML = QUANTITY_CART_ITEMS;
    }
    return '';
}

/* ---- Add to cart ---- */
function AddToCart(productDetails) {
    CART_NUMBER_CONTAINER.classList.add("cart-icon");

    const QUANTITY_CART_ITEMS = localStorage.getItem("qty_cartItems");
    PARSED_QUANTITY_CART_ITEMS = parseInt(QUANTITY_CART_ITEMS);

    if (PARSED_QUANTITY_CART_ITEMS) {
        localStorage.setItem("qty_cartItems", PARSED_QUANTITY_CART_ITEMS + 1);
        CART_NUMBER_CONTAINER.innerHTML = PARSED_QUANTITY_CART_ITEMS + 1;
    } else {
        localStorage.setItem("qty_cartItems", 1);
        CART_NUMBER_CONTAINER.innerHTML = 1 ; 
    }

    // Register all the added products
    const SHOPPING_CART_ITEMS_ARRAY = localStorage.getItem("Product_details");
    let PARSED_SHOPPING_CART_ITEMS_ARRAY = JSON.parse(SHOPPING_CART_ITEMS_ARRAY);

    if (!PARSED_SHOPPING_CART_ITEMS_ARRAY) {
        PARSED_SHOPPING_CART_ITEMS_ARRAY = [];
    }
    productDetails.inCart += 1;
    PARSED_SHOPPING_CART_ITEMS_ARRAY.push(productDetails);

    const DELETE_DUPLICATED_ITEMS = PARSED_SHOPPING_CART_ITEMS_ARRAY.filter((product) => {
        return (product.inCart === productDetails.inCart) || (product.id !== productDetails.id);
    });
    const STRINGIFIED_SHOPPING_CART_ITEMS_ARRAY = JSON.stringify(DELETE_DUPLICATED_ITEMS);
    localStorage.setItem("Product_details", STRINGIFIED_SHOPPING_CART_ITEMS_ARRAY);
    return '';
}

// Excution
Products();
OnloadPage();
ManageCart();