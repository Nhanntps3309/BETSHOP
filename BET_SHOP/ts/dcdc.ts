// dcdc.ts
export interface DOCHOIDUNGCU {
    id: number;
    name_dc: string;
    price: number;
    image: string;
}

const URL_DCDC = `http://localhost:3001/do_choi_dung_cu`;
const ITEMS_PER_DCDC = 8; // 4 items per row, 2 rows initially visible

let allProducts5: DOCHOIDUNGCU[] = [];
let currentPage5 = 1;

export const fetchProducts5 = async () => {
    try {
        const response = await fetch(URL_DCDC);
        allProducts5 = await response.json();
        renderProducts5();
    } catch (error) {
        console.error("Error fetching do choi dung cu products:", error);
    }
};

export const renderProducts5 = () => {
    const productList = document.getElementById("product-list5");
    if (productList) {
        const productsToShow = allProducts5.slice(0, currentPage5 * ITEMS_PER_DCDC);
        productList.innerHTML = productsToShow
            .map(
                (dc) => `
                    <div class="product-item">
                        <img src="${dc.image}" alt="${dc.name_dc}" />
                        <h3>${dc.name_dc}</h3>
                        <p>${Number(dc.price).toLocaleString("vi")} VND</p>
                    </div>
                `
            )
            .join("");

        const viewMoreButton = document.getElementById("view-more-button5");
        if (viewMoreButton) {
            viewMoreButton.style.display = currentPage5 * ITEMS_PER_DCDC < allProducts5.length ? "block" : "none";
        }
    }
};

export const viewMore5 = () => {
    currentPage5++;
    renderProducts5();
};

// This will run when the script is loaded
document.addEventListener("DOMContentLoaded", () => {
    fetchProducts5();
    const viewMoreButton = document.getElementById("view-more-button5") as HTMLButtonElement | null;
    if (viewMoreButton) {
        viewMoreButton.addEventListener("click", viewMore5);
    }
});