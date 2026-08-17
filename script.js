/* =========================================
   ข้อมูลสินค้า
========================================= */

const products = [

    {
        name: "Pink Glow Body Mask",
        category: "mask",
        price: 299,
        oldPrice: 349,
        discount: 15
    },

    {
        name: "Soft Skin Body Scrub",
        category: "scrub",
        price: 259,
        oldPrice: 299,
        discount: 13
    },

    {
        name: "Moisture Body Lotion",
        category: "lotion",
        price: 289,
        oldPrice: 329,
        discount: 12
    },

    {
        name: "SET A - Glow Set",
        category: "set",
        price: 699,
        oldPrice: 847,
        discount: 17
    },

    {
        name: "SET B - Premium Set",
        category: "set",
        price: 899,
        oldPrice: 1136,
        discount: 21
    }

];


/* =========================================
   แสดงสินค้า
========================================= */

function showProducts(data) {

    const productList =
        document.getElementById("productList");

    productList.innerHTML = "";


    data.forEach(product => {

        productList.innerHTML += `

            <div class="product">

                <div class="product-img">

                    <span>
                        BODYMASK<br>
                        PATTY
                    </span>

                </div>


                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <div class="price">

                        ฿${product.price}

                        <span class="old">
                            ฿${product.oldPrice}
                        </span>

                    </div>

                    <p>
                        ลด ${product.discount}%
                    </p>

                    <button
                        onclick="
                        addToCart(
                            '${product.name}',
                            ${product.price}
                        )">

                        เพิ่มลงตะกร้า

                    </button>

                </div>

            </div>

        `;

    });

}


/* =========================================
   ระบบกรองหมวดหมู่
========================================= */

function filterProducts(category) {

    if (category === "all") {

        showProducts(products);

    }

    else {

        const result =
            products.filter(
                product =>
                product.category === category
            );

        showProducts(result);

    }

}


/* =========================================
   ตะกร้าสินค้า
========================================= */

let cart = [];


function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cartCount")
        .textContent = cart.length;

    alert(
        `${name}\nเพิ่มลงตะกร้าแล้ว\nราคา ฿${price}`
    );

}


/* =========================================
   SET THEORY
   คณิตศาสตร์ดิสครีต
========================================= */


/* SET A */

const setA = new Set([
    "Body Mask",
    "Body Scrub",
    "Body Lotion"
]);


/* SET B */

const setB = new Set([
    "Body Mask",
    "Body Scrub",
    "Body Lotion",
    "Body Serum"
]);


/* =========================================
   UNION
   A ∪ B
========================================= */

function union(A, B) {

    return new Set([
        ...A,
        ...B
    ]);

}


/* =========================================
   INTERSECTION
   A ∩ B
========================================= */

function intersection(A, B) {

    return new Set(
        [...A].filter(
            item => B.has(item)
        )
    );

}


/* =========================================
   DIFFERENCE
   A - B
========================================= */

function difference(A, B) {

    return new Set(
        [...A].filter(
            item => !B.has(item)
        )
    );

}


/* แสดงผล Set ใน Console */

console.log("SET A =", [...setA]);

console.log("SET B =", [...setB]);

console.log(
    "A ∪ B =",
    [...union(setA, setB)]
);

console.log(
    "A ∩ B =",
    [...intersection(setA, setB)]
);

console.log(
    "A - B =",
    [...difference(setA, setB)]
);


/* =========================================
   IF / ELSE
   ระบบโปรโมชั่น
========================================= */

function checkDiscount(product) {

    if (product.category === "set") {

        return "ได้รับราคาพิเศษสำหรับ SET";

    }

    else {

        return "ราคาสินค้าปกติ";

    }

}


/* =========================================
   IF / ELSE
   ระบบแนะนำสินค้า
========================================= */

function recommendProduct(category) {

    if (category === "mask") {

        return "แนะนำ Body Scrub";

    }

    else if (category === "scrub") {

        return "แนะนำ Body Lotion";

    }

    else if (category === "lotion") {

        return "แนะนำ Body Mask";

    }

    else {

        return "แนะนำ SET A / SET B";

    }

}


/* =========================================
   เริ่มต้นแสดงสินค้าทั้งหมด
========================================= */

showProducts(products);
