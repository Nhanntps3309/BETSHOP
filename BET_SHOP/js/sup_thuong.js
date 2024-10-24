const URL_SUP_THUONG = `http://localhost:3001/sup_thuong`;
const ITEMS_PER_ST = 8;
let allProducts3 = [];
let currentPage3 = 1;
export const fetchProducts3 = async () => {
    try {
        const response = await fetch(URL_SUP_THUONG);
        allProducts3 = await response.json();
        renderProducts3();
    }
    catch (error) {
        console.error("Error fetching sup thuong products:", error);
    }
};
export const renderProducts3 = () => {
    const productList = document.getElementById("product-list3");
    if (productList) {
        const productsToShow = allProducts3.slice(0, currentPage3 * ITEMS_PER_ST);
        productList.innerHTML = productsToShow
            .map((st) => `
                    <div class="product-item">
                        <img src="${st.image}" alt="${st.name_st}" />
                        <h3>${st.name_st}</h3>
                        <p>${Number(st.price).toLocaleString("vi")} VND</p>
                    </div>
                `)
            .join("");
        const viewMoreButton = document.getElementById("view-more-button3");
        if (viewMoreButton) {
            viewMoreButton.style.display = currentPage3 * ITEMS_PER_ST < allProducts3.length ? "block" : "none";
        }
    }
};
export const viewMore3 = () => {
    currentPage3++;
    renderProducts3();
};
document.addEventListener("DOMContentLoaded", () => {
    fetchProducts3();
    const viewMoreButton = document.getElementById("view-more-button3");
    if (viewMoreButton) {
        viewMoreButton.addEventListener("click", viewMore3);
    }
});
