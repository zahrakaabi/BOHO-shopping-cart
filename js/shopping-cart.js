/*-----------------------------------------------------------------
                            Variables
-----------------------------------------------------------------*/
const shoppingCartItemsArray = localStorage.getItem("Product_details");
const parsedShoppingCartItemsArray = JSON.parse(shoppingCartItemsArray);
const PARSED_SHOPPING_CART_ITEMS_ARRAY = JSON.parse(shoppingCartItemsArray);

const CART_NUMBER_CONTAINER = document.getElementById("cart-number-container");
const QTY_CART_ITEMS = localStorage.getItem('qty_cartItems');
const PARSED_QTY_CART_ITEMS = parseInt(QTY_CART_ITEMS);

const SUBTOTAL_CONTAINER = document.getElementById("subtotal");

/*-----------------------------------------------------------------
                            Functions
-----------------------------------------------------------------*/
/* ---- Display shopping cart items ---- */
function ShoppingCartItems() {
    let SHOPPING_CART_ITEMS_CONTAINER = document.getElementById('shopping-cart__content');
    SHOPPING_CART_ITEMS_CONTAINER.innerHTML = '';
    
    parsedShoppingCartItemsArray?.map((product) => {
        SHOPPING_CART_ITEMS_CONTAINER.innerHTML += 
        `<tr>
            <td>
                <div class="flex items-center">
                    <button class="delete-icon"><img src="../assets/images/icons/delete.svg" alt="delete-icon" /></button>
                    <img src=${product.image} alt=${product.name} />
                    <h3>${product.name}</h3>
                </div>
            </td>
            <td><h3>$${product.price}</h3></td>
            <td>
                <div class="flex">
                    <button class="qty-icon delete-item">
                        <img src="../assets/images/icons/minus.svg" alt="delete-icon" />
                    </button>
                    <h3>${product.inCart}</h3>
                    <button class="qty-icon add-item">
                        <img src="../assets/images/icons/plus.svg" alt="add-icon" />
                    </button>
                </div>
            </td>
            <td><h3 class="total-items-price">$${product.inCart * product.price}</h3></td>
        </tr>`
    })
    return '';
}

/* ---- Delete item from the shopping cart ---- */
function DeleteItem() {
    const DELETE_BUTTONS_ARRAY = document.querySelectorAll(".delete-icon");

    for(let i = 0; i<DELETE_BUTTONS_ARRAY.length; i++) {
        DELETE_BUTTONS_ARRAY[i]?.addEventListener("click", function() {
            parsedShoppingCartItemsArray.splice(i, 1);
            const STRINGIFIED_SHOPPING_CART_ITEMS_ARRAY = JSON.stringify(parsedShoppingCartItemsArray);

            // Update Shopping bag
            const STRINGIFIED_QTY_CART_ITEMS = JSON.stringify(PARSED_QTY_CART_ITEMS - PARSED_SHOPPING_CART_ITEMS_ARRAY[i].inCart);
            localStorage.setItem('qty_cartItems', STRINGIFIED_QTY_CART_ITEMS);
            localStorage.setItem("Product_details", STRINGIFIED_SHOPPING_CART_ITEMS_ARRAY);
            
            window.location.reload();
        })
    }
    return '';
}

/* ---- Decrease items quantity ---- */
function DecreaseItemsQuantity() {
    const DECREASE_ITEMS_QTY = document.querySelectorAll(".delete-item");

    for(let i = 0; i<DECREASE_ITEMS_QTY.length; i++) {
        DECREASE_ITEMS_QTY[i]?.addEventListener("click", function() {
            parsedShoppingCartItemsArray[i].inCart -= 1;
            
            if (parsedShoppingCartItemsArray[i].inCart < 1) {
                parsedShoppingCartItemsArray.splice(i, 1);
            }
            const STRINGIFIED_SHOPPING_CART_ITEMS_ARRAY = JSON.stringify(parsedShoppingCartItemsArray);
            localStorage.setItem("Product_details", STRINGIFIED_SHOPPING_CART_ITEMS_ARRAY);

            // Update Shopping bag
            const STRINGIFIED_QTY_CART_ITEMS = JSON.stringify(PARSED_QTY_CART_ITEMS - 1);
            localStorage.setItem('qty_cartItems', STRINGIFIED_QTY_CART_ITEMS);

            // Update page
            window.location.reload();
        })
    }
    return '';
}

/* ---- Increase items quantity ---- */
function IncreaseItemsQuantity() {
    const DECREASE_ITEMS_QTY = document.querySelectorAll(".add-item");

    for(let i = 0; i<DECREASE_ITEMS_QTY.length; i++) {
        DECREASE_ITEMS_QTY[i]?.addEventListener("click", function() {
            parsedShoppingCartItemsArray[i].inCart += 1;
            const STRINGIFIED_SHOPPING_CART_ITEMS_ARRAY = JSON.stringify(parsedShoppingCartItemsArray);
            localStorage.setItem("Product_details", STRINGIFIED_SHOPPING_CART_ITEMS_ARRAY);
            localStorage.setItem('qty_cartItems', PARSED_QTY_CART_ITEMS + 1);
            window.location.reload();
        })
    }
    return '';
}

/* ---- Calculate subtotal ---- */
function Subtotal() {
    const TOTALS = document.querySelectorAll(".total-items-price");
    let subTotal = 0;

    for (let i = 0; i<TOTALS.length; i++) {
        const PRODUCT_TOTAL = TOTALS[i].textContent;
        const GET_TOTAL =  parseInt(PRODUCT_TOTAL.slice(1));
        subTotal += GET_TOTAL;
    }
    SUBTOTAL_CONTAINER.innerHTML = `$${subTotal}`;
    const STRINGIFIED_SUBTOTAL = JSON.stringify(subTotal);
    localStorage.setItem('subTotal', STRINGIFIED_SUBTOTAL);

    return '';
}

/* ---- Manage shopping-bag items number ---- */
function CartNumber() {
    CART_NUMBER_CONTAINER.classList.add("cart-icon");
    CART_NUMBER_CONTAINER.innerHTML = PARSED_QTY_CART_ITEMS;
    return '';
}

// Excution
ShoppingCartItems();
DeleteItem();
DecreaseItemsQuantity();
IncreaseItemsQuantity();
CartNumber();
Subtotal();