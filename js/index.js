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

//Excution
OnloadPage();