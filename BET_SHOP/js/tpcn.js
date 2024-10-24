const URL_TPCN = `http://localhost:3001/thuc_pham_cn`;
const ITEMS_PER_TPCN = 8;
let allProducts4 = [];
let currentPage4 = 1;
export const fetchProducts4 = async () => {
    try {
        const response = await fetch(URL_TPCN);
        allProducts4 = await response.json();
        renderProducts4();
    }
    catch (error) {
        console.error("Error fetching thuc pham chuc nang products:", error);
    }
};
export const renderProducts4 = () => {
    const productList = document.getElementById("product-list4");
    if (productList) {
        const productsToShow = allProducts4.slice(0, currentPage4 * ITEMS_PER_TPCN);
        productList.innerHTML = productsToShow
            .map((tp) => `
                    <div class="product-item">
                        <img src="${tp.image}" alt="${tp.name_tp}" />
                        <h3>${tp.name_tp}</h3>
                        <p>${Number(tp.price).toLocaleString("vi")} VND</p>
                    </div>
                `)
            .join("");
        const viewMoreButton = document.getElementById("view-more-button4");
        if (viewMoreButton) {
            viewMoreButton.style.display = currentPage4 * ITEMS_PER_TPCN < allProducts4.length ? "block" : "none";
        }
    }
};
export const viewMore4 = () => {
    currentPage4++;
    renderProducts4();
};
document.addEventListener("DOMContentLoaded", () => {
    fetchProducts4();
    const viewMoreButton = document.getElementById("view-more-button4");
    if (viewMoreButton) {
        viewMoreButton.addEventListener("click", viewMore4);
    }
});
