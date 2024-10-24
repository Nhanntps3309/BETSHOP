const URL_PKVS = `http://localhost:3001/phu_kien_ve_sinh`;
const ITEMS_PER_PKVS = 8;
let allProducts6 = [];
let currentPage6 = 1;
export const fetchProducts6 = async () => {
    try {
        const response = await fetch(URL_PKVS);
        allProducts6 = await response.json();
        renderProducts6();
    }
    catch (error) {
        console.error("Error fetching phu kien ve sinh products:", error);
    }
};
export const renderProducts6 = () => {
    const productList = document.getElementById("product-list6");
    if (productList) {
        const productsToShow = allProducts6.slice(0, currentPage6 * ITEMS_PER_PKVS);
        productList.innerHTML = productsToShow
            .map((vs) => `
                    <div class="product-item">
                        <img src="${vs.image}" alt="${vs.name_vs}" />
                        <h3>${vs.name_vs}</h3>
                        <p>${Number(vs.price).toLocaleString("vi")} VND</p>
                    </div>
                `)
            .join("");
        const viewMoreButton = document.getElementById("view-more-button6");
        if (viewMoreButton) {
            viewMoreButton.style.display = currentPage6 * ITEMS_PER_PKVS < allProducts6.length ? "block" : "none";
        }
    }
};
export const viewMore6 = () => {
    currentPage6++;
    renderProducts6();
};
document.addEventListener("DOMContentLoaded", () => {
    fetchProducts6();
    const viewMoreButton = document.getElementById("view-more-button6");
    if (viewMoreButton) {
        viewMoreButton.addEventListener("click", viewMore6);
    }
});
