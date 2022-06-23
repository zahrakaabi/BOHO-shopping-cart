/*-----------------------------------------------------------------
                            Variables
-----------------------------------------------------------------*/
const CHECKOUT_ORDERS_CONTAINER = document.getElementById("checkout-infos");

const SHOPPING_CART_ITEMS_ARRAY = localStorage.getItem("Product_details");
let PARSED_SHOPPING_CART_ITEMS_ARRAY = JSON.parse(SHOPPING_CART_ITEMS_ARRAY);

const SUBTOTAL = localStorage.getItem('subTotal');
const PARSED_SUBTOTAL = JSON.parse(SUBTOTAL);

/*-----------------------------------------------------------------
                            Functions
-----------------------------------------------------------------*/
/* ---- Get orders ---- */
function CheckoutOrders() {
    CHECKOUT_ORDERS_CONTAINER.innerHTML = '';

    const ORDERS = PARSED_SHOPPING_CART_ITEMS_ARRAY.map((product) => {
        CHECKOUT_ORDERS_CONTAINER.innerHTML += 
        `<div class="flex justify-between">
            <h3 class="checkout-content">${product.name}<span>(${product.inCart})</span></h3>
            <h3 class="checkout-content">$ ${product.inCart * product.price}</h3>
        </div>`;
    }).join('');

    return ORDERS;
}

/* ---- Calculate subtotal + shipping cost ---- */
function ShippingCost() {
    const SUBTOTAL_CONAINER = document.getElementById("checkout-total");
    SUBTOTAL_CONAINER.innerHTML = `$ ${PARSED_SUBTOTAL + 7.00}`;
    return '';
}

/* ---- Generate pdf ---- */
function GeneratePDF() {
    const DOWNLOAD = document.getElementById("download");

    DOWNLOAD.addEventListener("click", () => {
        const NAME = document.getElementById("name").value;
        const POHONE_NAME = document.getElementById("phone-number").value;
        const EMAIL = document.getElementById("email").value;
        const ADRESS = document.getElementById("adress").value;
        const POSTAL_CODE = document.getElementById("postal-code").value;
        const CHECKOUT_INFOS = document.getElementById("checkout-infos").innerText;
        
        if (NAME === "" || POHONE_NAME === "" || EMAIL === "" || ADRESS === "" || POSTAL_CODE === "") {
            alert("You have to fill the form !")
        } else {
            window.jsPDF = window.jspdf.jsPDF;
            let doc = new jsPDF();
            doc.setFontSize('22');
            doc.text('YOU', 10, 20);
            doc.setFontSize('16');
            doc.text('Name : ' + NAME, 10, 30);
            doc.text('Phone Number : ' + POHONE_NAME, 10, 40);
            doc.text('E-mail : ' + EMAIL, 10, 50);
            doc.setFontSize('22');
            doc.text('DETAILS', 10, 70);
            doc.setFontSize('16');
            doc.text('Adress : ' + ADRESS, 10, 80);
            doc.text('Postal Code : ' + POSTAL_CODE, 10, 90);
            doc.setFontSize('22');
            doc.text('ORDER', 10, 110);
            doc.setFontSize('16');
            doc.text(CHECKOUT_INFOS, 10, 120);
            doc.setFontSize('22');
            doc.text('TOTAL', 10, 190);
            doc.setFontSize('16');
            doc.text(`$ ${PARSED_SUBTOTAL + 7.00}`, 10, 200);
            doc.save("Orders.pdf");
        }
    })
}

// Excution
CheckoutOrders();
ShippingCost();
GeneratePDF();