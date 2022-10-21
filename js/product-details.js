/*-----------------------------------------------------------------
                            Variables
-----------------------------------------------------------------*/
const PRODUCT_DETAILS = localStorage.getItem('page-detail-product');
let PARSED_PRODUCT_DETAILS = JSON.parse(PRODUCT_DETAILS); 
const QTY_CART_ITEMS = localStorage.getItem('qty_cartItems');
const PARSED_QTY_CART_ITEMS = parseInt(QTY_CART_ITEMS);
const ALL_PRODUCTS_ARRAY = localStorage.getItem('Product_details');
let PARSED_ALL_PRODUCTS_ARRAY = JSON.parse(ALL_PRODUCTS_ARRAY);

/*-----------------------------------------------------------------
                            Functions
-----------------------------------------------------------------*/
/* ---- Check cart after loading ---- */
// save the number of added products to the bag
// even after loading page 
function OnloadPage() {
    const CART_NUMBER_CONTAINER = document.getElementById('cart-number-container');
    let QUANTITY_CART_ITEMS = localStorage.getItem("qty_cartItems");

    if (QUANTITY_CART_ITEMS) {
        CART_NUMBER_CONTAINER.classList.add("cart-icon");
        CART_NUMBER_CONTAINER.innerHTML = QUANTITY_CART_ITEMS;
    }
    return '';
}

/* ---- Display product details ----- */
function ProductDetails() {
    const PRODUCT_DETAILS_WRAPPER = document.getElementById('product-details-wrapper');
    PRODUCT_DETAILS_WRAPPER.innerHTML =
            `<div class="product-details-container flex items-center">
                <img src=${PARSED_PRODUCT_DETAILS.image} alt=${PARSED_PRODUCT_DETAILS.name} />
                <div class="product-details-content">
                    <h1>${PARSED_PRODUCT_DETAILS.name}</h1>
                    <p>DESCRIPTION</p>
                    <p>${PARSED_PRODUCT_DETAILS.description}</p>
                    <p>DETAILS</p>
                    <p>${PARSED_PRODUCT_DETAILS.details}</p>
                    <div class="call-to-action-buttons">
                        <button class="add-to-cart-button">ADD TO CART</button>
                        <button>$ ${PARSED_PRODUCT_DETAILS.price}</button>
                    </div>
                </div>
            </div>`
    return '';
}

/* ---- Update shopping bag (NUMBER) ---- */
function UpdateShppongBag() {
    /* ------------------------------------------------------------ */
    const CART_NUMBER_CONTAINER = document.getElementById('cart-number-container');
    CART_NUMBER_CONTAINER.classList.add("cart-icon");
    
    const QUANTITY_CART_ITEMS = localStorage.getItem("qty_cartItems");
    const PARSED_QUANTITY_CART_ITEMS = parseInt(QUANTITY_CART_ITEMS);

    if (QUANTITY_CART_ITEMS) {
        localStorage.setItem("qty_cartItems", JSON.stringify(PARSED_QUANTITY_CART_ITEMS + 1));
        CART_NUMBER_CONTAINER.innerHTML = PARSED_QUANTITY_CART_ITEMS + 1;
    } else {
        localStorage.setItem("qty_cartItems", 1);
        CART_NUMBER_CONTAINER.innerHTML = 1 ; 
    }
    return '';
}

/* ---- Add to cart onclick ---- */
function ManageCart() {
    const ADD_TO_CART_BUTTONS_ARRAY = document.querySelectorAll('.add-to-cart-button');

    /* --------------------- ONCLICK ------------------------------------ */
        ADD_TO_CART_BUTTONS_ARRAY[0].addEventListener("click", function(){

            // Manage shopping bag number
            PARSED_PRODUCT_DETAILS.inCart += 1;

            // Update shopping bag (number)
            UpdateShppongBag();

            // Save added products to the shopping bag
            const ALL_PRODUCTS_ARRAY = localStorage.getItem("Product_details");
            let PARSED_ALL_PRODUCTS_ARRAY = JSON.parse(ALL_PRODUCTS_ARRAY);

            if (!PARSED_ALL_PRODUCTS_ARRAY) {
                PARSED_ALL_PRODUCTS_ARRAY = [];
            }
            PARSED_ALL_PRODUCTS_ARRAY.push(PARSED_PRODUCT_DETAILS);
        
            const DELETE_DUPLICATED_ITEMS = PARSED_ALL_PRODUCTS_ARRAY.filter((productDetails) => {
                return (productDetails.inCart === PARSED_PRODUCT_DETAILS.inCart) || (productDetails.id !== PARSED_PRODUCT_DETAILS.id);
            });

            const STRINGIFIED_ALL_PRODUCTS_ARRAY = JSON.stringify(DELETE_DUPLICATED_ITEMS);
            localStorage.setItem("Product_details", STRINGIFIED_ALL_PRODUCTS_ARRAY);
        })
    return '';
}

// Excution
OnloadPage();
ProductDetails();
ManageCart();