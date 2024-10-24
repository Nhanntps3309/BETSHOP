// pate.ts
interface PATE {
    id: number;
    name: string;
    price: number;
    image: string;
}

const URL_PATE = `http://localhost:3001/pate`;
const ITEMS_PER_PAGE = 8; // 4 items per row, 2 rows initially visible

let allProducts: PATE[] = [];
let currentPage = 1;

const fetchProducts = async () => {
    try {
        const response = await fetch(URL_PATE);
        allProducts = await response.json();
        renderProducts();
    } catch (error) {
        console.error("Error fetching pate products:", error);
    }
};

const renderProducts = () => {
    const productList = document.getElementById("product-list");
    if (productList) {
        const productsToShow = allProducts.slice(0, currentPage * ITEMS_PER_PAGE);
        productList.innerHTML = productsToShow
            .map(
                (pate) => `
                    <div class="product-item">
                        <img src="${pate.image}" alt="${pate.name}" />
                        <h3>${pate.name}</h3>
                        <p>${Number(pate.price).toLocaleString("vi")} VND</p>
                    </div>
                `
            )
            .join("");

        const viewMoreButton = document.getElementById("view-more-button");
        if (viewMoreButton) {
            viewMoreButton.style.display = currentPage * ITEMS_PER_PAGE < allProducts.length ? "block" : "none";
        }
    }
};

const viewMore = () => {
    currentPage++;
    renderProducts();
};

document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
    const viewMoreButton = document.getElementById("view-more-button");
    if (viewMoreButton) {
        viewMoreButton.addEventListener("click", viewMore);
    }
});