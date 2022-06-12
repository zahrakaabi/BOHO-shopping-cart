/*-----------------------------------------------------------------
                            Variables
-----------------------------------------------------------------*/
const shoppingCartItemsArray = localStorage.getItem("Product_details");
const parsedShoppingCartItemsArray = JSON.parse(shoppingCartItemsArray);

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
                    <button class="qty-icon delete-item" onclick="DecreaseItemsQuantity()">
                        <img src="../assets/images/icons/minus.svg" alt="delete-icon" />
                    </button>
                    <h3>${product.inCart}</h3>
                    <button class="qty-icon add-item" onclick="IncreaseItemsQuantity()">
                        <img src="../assets/images/icons/plus.svg" alt="add-icon" />
                    </button>
                </div>
            </td>
            <td><h3>// @TO DO : calculate the total price</h3></td>
        </tr>`
    })
    return '';
}

/* ---- Delete item from the shopping cart ---- */
function DeleteItem() {
    const DELETE_BUTTONS_ARRAY = document.querySelectorAll(".delete-icon");
    const QTY_CART_ITEMS = localStorage.getItem('qty_cartItems');
    const PARSED_QTY_CART_ITEMS = parseInt(QTY_CART_ITEMS);

    for(let i = 0; i<DELETE_BUTTONS_ARRAY.length; i++) {
        DELETE_BUTTONS_ARRAY[i]?.addEventListener("click", function() {
            parsedShoppingCartItemsArray.splice(i, 1);
            const STRINGIFIED_SHOPPING_CART_ITEMS_ARRAY = JSON.stringify(parsedShoppingCartItemsArray);
            localStorage.setItem("Product_details", STRINGIFIED_SHOPPING_CART_ITEMS_ARRAY);
            window.location.reload();
            localStorage.setItem('qty_cartItems', PARSED_QTY_CART_ITEMS -1);
        })
    }
    return '';
}

/* ---- Decrease items quantity ---- */
function DecreaseItemsQuantity() {
    return 'decrase';
}

/* ---- Increase items quantity ---- */
function IncreaseItemsQuantity() {
    return 'increase';
}

// Excution
ShoppingCartItems();
DeleteItem();