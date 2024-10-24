// thuc_an_hat.ts
export interface THUCANHAT {
    id: number;
    name_thuc_an: string;
    price: number;
    image: string;
}

const URL_THUC_AN_HAT = `http://localhost:3001/thuc_an_hat`;
const ITEMS_PER_TAH = 8; // 4 items per row, 2 rows initially visible

let allProducts2: THUCANHAT[] = [];
let currentPage2 = 1;

export const fetchProducts2 = async () => {
    try {
        const response = await fetch(URL_THUC_AN_HAT);
        allProducts2 = await response.json();
        renderProducts2(); // Corrected function name
    } catch (error) {
        console.error("Error fetching thuc an hat products:", error);
    }
};

export const renderProducts2 = () => {
    const productList = document.getElementById("product-list2");
    if (productList) {
        const productsToShow = allProducts2.slice(0, currentPage2 * ITEMS_PER_TAH);
        productList.innerHTML = productsToShow
            .map(
                (tah) => `
                    <div class="product-item">
                        <img src="${tah.image}" alt="${tah.name_thuc_an}" />
                        <h3>${tah.name_thuc_an}</h3>
                        <p>${Number(tah.price).toLocaleString("vi")} VND</p>
                    </div>
                `
            )
            .join("");

        const viewMoreButton = document.getElementById("view-more-button2");
        if (viewMoreButton) {
            viewMoreButton.style.display = currentPage2 * ITEMS_PER_TAH < allProducts2.length ? "block" : "none";
        }
    }
};

export const viewMore2 = () => {
    currentPage2++;
    renderProducts2();
};

// This will run when the script is loaded
document.addEventListener("DOMContentLoaded", () => {
    fetchProducts2();
    const viewMoreButton = document.getElementById("view-more-button2") as HTMLButtonElement | null;
    if (viewMoreButton) {
        viewMoreButton.addEventListener("click", viewMore2);
    }
});