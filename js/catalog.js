/*-----------------------------------------------------------------
                              ARRAYS
-----------------------------------------------------------------*/
const PRODUCTS_ARRAY = [
    {
        id: 0,
        image: "https://images.unsplash.com/photo-1591056076251-514f3c9368a4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
        name: "bouquet 01",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
        details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        price: 45,
        inCart: 0,
    },
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1557925923-6885735abfb1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388",
        name: "bouquet 02",
        price: 49,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
        details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        inCart: 0,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1556269975-7cc2cbc82480?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
        name: "bouquet 03",
        price: 35,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
        details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        inCart: 0,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
        name: "bouquet 04",
        price: 75,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
        details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        inCart: 0,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1557925923-6885735abfb1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388",
        name: "bouquet 05",
        price: 80,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
        details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        inCart: 0,
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1539346254710-b6d86e095035?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
        name: "bouquet 06",
        price: 63,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
        details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        inCart: 0,
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1539073602199-a078932952bd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
        name: "bouquet 07",
        price: 45,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
        details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        inCart: 0,
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1541792529698-03020b773b3b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
        name: "bouquet 08",
        price: 72,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
        details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
        inCart: 0,
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1592309487290-2cf1e17b4623?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
        name: "bouquet 09",
        price: 35,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
        details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
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
var searchInput;

/*-----------------------------------------------------------------
                            Functions
-----------------------------------------------------------------*/
/* ---- SEARCH ITEM ----- */
function Search() {
    const SEARCH_ICON = document.getElementById('search-icon');
    const SEARCH_BOX = document.getElementById('search-box');
    const HIDE_SEARCH = document.getElementById('hide-search');

    // SHOW SEARCH BOX
    SEARCH_ICON.addEventListener("click", function() {
        SEARCH_BOX.style.top = "0";
        HIDE_SEARCH.style.top = "0";
    })

    // HIDE SEARCH BOX
    HIDE_SEARCH.addEventListener("click", function() {
        SEARCH_BOX.style.top = "-100%";
        HIDE_SEARCH.style.top = "-100%";
    })
    return '';
}

/* ---- Display all products ----- */
function Products() {
    let products_list = document.getElementById('products');
    products_list.innerHTML = '';

    const items =  PRODUCTS_ARRAY?.map((product) => {
        products_list.innerHTML +=
            `<div class="single-product">
                <button class="add-to-favorite">
                    <img id="favorite-icon" src="../assets/images/icons/white-heart.svg" alt="white-heart" />
                </button>
                <img class="product-img" src=${product.image} alt=${product.name} />
                <div class="product-info flex justify-between">
                    <h4 class="product-name"> ${product.name} </h4>
                    <h4 class="product-price"> $${product.price} </h4>
                </div>
                <div class="add-to-cart-hover flex flex-column justify-center items-center">
                    <a href="../html/product-details.html"
                       class="view-product-details">
                        <button class="view-button">VIEW</button>
                    </a>
                    <button class="add-to-cart-button">ADD TO CART</button>
                </div>
            </div>`
        }
    ).join('');

    return items;
}

/* ---- SAVE SEARCH INPUT ---- */
function onKeyUpSearch() {
    // get all the products
    let products = document.querySelectorAll('.single-product')
    // get SEARCH INPUT 
    const SEARCH_BOX = document.getElementById('search-input');
    searchInput = SEARCH_BOX.value.toLowerCase();

    // Loop through the products
    for (let i = 0; i < products.length; i++) {
        if (products[i].innerText.toLowerCase().includes(searchInput)) {
            products[i].classList.remove("remove-element");
        } else {
            products[i].classList.add("remove-element");
        }
    }
    return '';
}

/* ---- check favorite bag after loading ---- */
// save the number of added products to the favorites
// even after loading page 
function OnloadPageFavorites() {
    let QUANTITY_FAVORITE_ITEMS = localStorage.getItem("favorites");
    const FAVORITE_NUMBER_CONTAINER = document.getElementById('favorite-number-container');

    if (QUANTITY_FAVORITE_ITEMS) {
        FAVORITE_NUMBER_CONTAINER.classList.add("heart-icon");
        FAVORITE_NUMBER_CONTAINER.innerHTML = QUANTITY_FAVORITE_ITEMS;
    }
    return '';
}

/* ---- Add to favorites ---- */
function AddToFavorite() {
    const ADD_TO_FAVORITE_BUTTONS = document.querySelectorAll('.add-to-favorite');
    
    for (let i = 0; i<PRODUCTS_ARRAY.length; i++) {
        ADD_TO_FAVORITE_BUTTONS[i].addEventListener("click", function() {
            const FAVORITES_ARRAY = localStorage.getItem('favorites-array');
            let PARSED_FAVORITES_ARRAY = JSON.parse(FAVORITES_ARRAY);

            if (!PARSED_FAVORITES_ARRAY) {
                PARSED_FAVORITES_ARRAY = [];
            }

            PARSED_FAVORITES_ARRAY.push(PRODUCTS_ARRAY[i]);
            
            // DELETE DUPLICATED FAVORITE ITEMS
            const UNIQUE_FAVORITES_ID = new Set();
            const DELETE_DUPLICATED_FAVORITE_ITEMS = PARSED_FAVORITES_ARRAY.filter((favorite) => {
                // use .has instead includes
                const IS_DUPLICATED = UNIQUE_FAVORITES_ID.has(favorite.id);
                // use .add instead .push
                UNIQUE_FAVORITES_ID.add(favorite.id);
                if (!IS_DUPLICATED) {
                  return true;
                } else {
                    alert("Hello Dear USER\n This product is already added to your favorite list <3");
                }
                return false;
            });

            // save favorite items into localStorage
            const STRINGIFIED_DELETE_DUPLICATED_FAVORITE_ITEMS = JSON.stringify(DELETE_DUPLICATED_FAVORITE_ITEMS);
            localStorage.setItem('favorites-array', STRINGIFIED_DELETE_DUPLICATED_FAVORITE_ITEMS);

            // Favorites number
            const FAVORITES_NUMBER = DELETE_DUPLICATED_FAVORITE_ITEMS.length;
            const STRINGIFIED_FAVORITES_NUMBER = JSON.stringify(FAVORITES_NUMBER);
            localStorage.setItem('favorites', STRINGIFIED_FAVORITES_NUMBER);

            // SHOW Favorites (style)
            const FAVORITE_NUMBER_CONTAINER = document.getElementById('favorite-number-container');
            FAVORITE_NUMBER_CONTAINER.innerHTML = FAVORITES_NUMBER;
            FAVORITE_NUMBER_CONTAINER.classList.add("heart-icon");
        })
    }
    return '';
}

/* ---- save product details to localStorage onclick ---- */
function SetProductDetailsLocalStorage() {
    const PRODUCT_DETAILS_BUTTONS_ARRAY = document.querySelectorAll('.view-product-details');
        for(let i = 0; i<PRODUCTS_ARRAY.length; i++) {
                PRODUCT_DETAILS_BUTTONS_ARRAY[i].addEventListener("click", function(){
                localStorage.setItem('page-detail-product', JSON.stringify(PRODUCTS_ARRAY[i]));
                localStorage.setItem("qty_cartItems", JSON.stringify(PARSED_QTY_CART_ITEMS + 1));
                // Update page
                window.location.reload();
            })
        }
    return '';
}

/* ---- Add to cart onclick ---- */
function ManageCart() {
    const ADD_TO_CART_BUTTONS_ARRAY = document.querySelectorAll('.add-to-cart-button');
        for(let i = 0; i<PRODUCTS_ARRAY.length; i++) {
            ADD_TO_CART_BUTTONS_ARRAY[i].addEventListener("click", function(){
            AddToCart(PRODUCTS_ARRAY[i]);
            localStorage.setItem('page-detail-product', JSON.stringify(PRODUCTS_ARRAY[i]));
        })
    }
    return '';
}

/* ---- Check cart after loading ---- */
// save the number of added products to the bag
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
    const PARSED_QUANTITY_CART_ITEMS = parseInt(QUANTITY_CART_ITEMS);

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
Search();
Products();
SetProductDetailsLocalStorage();
OnloadPage();
ManageCart();
AddToFavorite();
OnloadPageFavorites();