const URL_API_SP = `http://localhost:3000/san_pham_ban_chay`;
const URL_API_BOSS = `http://localhost:3000/boss_an_ngon`;
const URL_API_BOSSTT = `http://localhost:3000/boss_thoi_thuong`;
const URL_API_BOSSGC = `http://localhost:3000/boss_giau_co`;
const URL_API_BOSSXD = `http://localhost:3000/boss_xinh_dep`;
const URL_API_KKTC = `http://localhost:3000/khoan_khac_thu_cung`;
const laySanPhamBanChay = async () => {
    try {
        const response = await fetch(URL_API_SP);
        const sanPham = await response.json();
        const productList = document.getElementById("product-list");
        if (productList) {
            productList.innerHTML = sanPham
                .map((sp) => `
                <div class="sp">
                    <img src="${sp.hinh}" alt="${sp.ten_sp}" />
                    <h3>${sp.ten_sp}</h3>
                    <p>${Number(sp.gia).toLocaleString("vi")} VND</p>
                    <p>${sp.mo_ta}</p>
                    <p>Cập nhật: ${new Date(sp.ngay).toLocaleDateString("vi")}</p>
                </div>
            `)
                .join("");
        }
    }
    catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
    }
};
const bossAnNgon = async () => {
    try {
        const response = await fetch(URL_API_BOSS);
        const bossAN = await response.json();
        const productList = document.getElementById("product-list-bossan");
        if (productList) {
            productList.innerHTML = bossAN
                .map((ban) => `
            <div class="ban" data-id="${ban.id}">
              <div class="corner-banner">Hot</div>
              <img src="${ban.hinh}" alt="${ban.ten_boss}" />
              <h3>${ban.ten_boss}</h3>
              <p>${Number(ban.gia).toLocaleString("vi")} VND</p>
              <p>${ban.mo_ta}</p>
              <p>Cập nhật: ${new Date(ban.ngay).toLocaleDateString("vi")}</p>
            </div>
          `)
                .join("");
            const products = productList.querySelectorAll('.ban');
            products.forEach(product => {
                product.addEventListener('click', (event) => {
                    const id = product.getAttribute('data-id');
                    if (id) {
                        navigateToProductDetail(id);
                    }
                });
            });
        }
        const navigateToProductDetail = (productId) => {
            window.location.href = `chitietsp.html?id=${productId}`;
        };
        document.addEventListener("DOMContentLoaded", () => {
            bossAnNgon();
        });
        const productContainer = document.getElementById("product-list-bossan");
        const prevButton = document.getElementById("prevButton");
        const nextButton = document.getElementById("nextButton");
        let scrollPosition = 0;
        const scrollAmount = 220;
        if (nextButton && prevButton && productContainer) {
            nextButton.addEventListener("click", () => {
                scrollPosition += scrollAmount;
                if (scrollPosition > productContainer.scrollWidth - productContainer.clientWidth) {
                    scrollPosition = productContainer.scrollWidth - productContainer.clientWidth;
                }
                productContainer.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth",
                });
            });
            prevButton.addEventListener("click", () => {
                scrollPosition -= scrollAmount;
                if (scrollPosition < 0) {
                    scrollPosition = 0;
                }
                productContainer.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth",
                });
            });
        }
    }
    catch (error) {
        console.error("Lỗi khi lấy dữ liệu boss ăn ngon:", error);
    }
};
const BossThoiThuong = async () => {
    try {
        const response = await fetch(URL_API_BOSSTT);
        const bossTT = await response.json();
        const productList = document.getElementById("product-list-bosstt");
        if (productList) {
            productList.innerHTML = bossTT
                .map((btt) => `
                <div class="btt">
                    <div class="corner-banner2">Hot</div>
                    <img src="${btt.hinh}" alt="${btt.boss_tt}" />
                    <h3>${btt.boss_tt}</h3>
                    <p>${Number(btt.gia).toLocaleString("vi")} VND</p>
                    <p>${btt.mo_ta}</p>
                    <p>Cập nhật: ${new Date(btt.ngay).toLocaleDateString("vi")}</p>
                </div>
            `)
                .join("");
        }
        const productContainerTT = document.getElementById("product-list-bosstt");
        const prevButtonTT = document.getElementById("prevButton2");
        const nextButtonTT = document.getElementById("nextButton2");
        let scrollPositionTT = 0;
        const scrollAmountTT = 220;
        if (nextButtonTT && prevButtonTT && productContainerTT) {
            nextButtonTT.addEventListener("click", () => {
                scrollPositionTT += scrollAmountTT;
                if (scrollPositionTT > productContainerTT.scrollWidth - productContainerTT.clientWidth) {
                    scrollPositionTT = productContainerTT.scrollWidth - productContainerTT.clientWidth;
                }
                productContainerTT.scrollTo({
                    left: scrollPositionTT,
                    behavior: "smooth",
                });
            });
            prevButtonTT.addEventListener("click", () => {
                scrollPositionTT -= scrollAmountTT;
                if (scrollPositionTT < 0) {
                    scrollPositionTT = 0;
                }
                productContainerTT.scrollTo({
                    left: scrollPositionTT,
                    behavior: "smooth",
                });
            });
        }
    }
    catch (error) {
        console.error("Lỗi khi lấy dữ liệu boss thời thượng:", error);
    }
};
const BossGiauCo = async () => {
    try {
        const response = await fetch(URL_API_BOSSGC);
        const bossGC = await response.json();
        const productList = document.getElementById("product-list-bossgc");
        if (productList) {
            productList.innerHTML = bossGC
                .map((bgc) => `
                <div class="bgc">
                    <div class="corner-banner3">Hot</div>
                    <img src="${bgc.hinh}" alt="${bgc.boss_gc}" />
                    <h3>${bgc.boss_gc}</h3>
                    <p>${Number(bgc.gia).toLocaleString("vi")} VND</p>
                    <p>${bgc.mo_ta}</p>
                    <p>Cập nhật: ${new Date(bgc.ngay).toLocaleDateString("vi")}</p>
                </div>
            `)
                .join("");
        }
        const productContainerGC = document.getElementById("product-list-bossgc");
        const prevButtonGC = document.getElementById("prevButton3");
        const nextButtonGC = document.getElementById("nextButton3");
        let scrollPositionGC = 0;
        const scrollAmountGC = 220;
        if (nextButtonGC && prevButtonGC && productContainerGC) {
            nextButtonGC.addEventListener("click", () => {
                scrollPositionGC += scrollAmountGC;
                if (scrollPositionGC > productContainerGC.scrollWidth - productContainerGC.clientWidth) {
                    scrollPositionGC = productContainerGC.scrollWidth - productContainerGC.clientWidth;
                }
                productContainerGC.scrollTo({
                    left: scrollPositionGC,
                    behavior: "smooth",
                });
            });
            prevButtonGC.addEventListener("click", () => {
                scrollPositionGC -= scrollAmountGC;
                if (scrollPositionGC < 0) {
                    scrollPositionGC = 0;
                }
                productContainerGC.scrollTo({
                    left: scrollPositionGC,
                    behavior: "smooth",
                });
            });
        }
    }
    catch (error) {
        console.error("Lỗi khi lấy dữ liệu boss giàu có:", error);
    }
};
const BossXinhDep = async () => {
    try {
        const response = await fetch(URL_API_BOSSXD);
        const bossXD = await response.json();
        const productList = document.getElementById("product-list-bossxd");
        if (productList) {
            productList.innerHTML = bossXD
                .map((bxd) => `
                <div class="bxd">
                    <div class="corner-banner4">Hot</div>
                    <img src="${bxd.hinh}" alt="${bxd.boss_xd}" />
                    <h3>${bxd.boss_xd}</h3>
                    <p>${Number(bxd.gia).toLocaleString("vi")} VND</p>
                    <p>${bxd.mo_ta}</p>
                    <p>Cập nhật: ${new Date(bxd.ngay).toLocaleDateString("vi")}</p>
                </div>
            `)
                .join("");
        }
        const productContainerXD = document.getElementById("product-list-bossxd");
        const prevButtonXD = document.getElementById("prevButton4");
        const nextButtonXD = document.getElementById("nextButton4");
        let scrollPositionXD = 0;
        const scrollAmountXD = 220;
        if (nextButtonXD && prevButtonXD && productContainerXD) {
            nextButtonXD.addEventListener("click", () => {
                scrollPositionXD += scrollAmountXD;
                if (scrollPositionXD > productContainerXD.scrollWidth - productContainerXD.clientWidth) {
                    scrollPositionXD = productContainerXD.scrollWidth - productContainerXD.clientWidth;
                }
                productContainerXD.scrollTo({
                    left: scrollPositionXD,
                    behavior: "smooth",
                });
            });
            prevButtonXD.addEventListener("click", () => {
                scrollPositionXD -= scrollAmountXD;
                if (scrollPositionXD < 0) {
                    scrollPositionXD = 0;
                }
                productContainerXD.scrollTo({
                    left: scrollPositionXD,
                    behavior: "smooth",
                });
            });
        }
    }
    catch (error) {
        console.error("Lỗi khi lấy dữ liệu boss xinh đẹp:", error);
    }
};
const KhoanKhacThuCung = async () => {
    try {
        const response = await fetch(URL_API_KKTC);
        const kktc = await response.json();
        const productList = document.getElementById("product-list-kktc");
        if (productList) {
            productList.innerHTML = kktc
                .map((kktc) => `
                <div class="kktc">
                    <div class="corner-banner4">Hot</div>
                    <img src="${kktc.hinh}" alt="${kktc.id}" />
                </div>
            `)
                .join("");
        }
        const productContainerKKTC = document.getElementById("product-list-kktc");
        const prevButtonKKTC = document.getElementById("prevButton5");
        const nextButtonKKTC = document.getElementById("nextButton5");
        let scrollPositionKKTC = 0;
        const scrollAmountKKTC = 220;
        if (nextButtonKKTC && prevButtonKKTC && productContainerKKTC) {
            nextButtonKKTC.addEventListener("click", () => {
                scrollPositionKKTC += scrollAmountKKTC;
                if (scrollPositionKKTC > productContainerKKTC.scrollWidth - productContainerKKTC.clientWidth) {
                    scrollPositionKKTC = productContainerKKTC.scrollWidth - productContainerKKTC.clientWidth;
                }
                productContainerKKTC.scrollTo({
                    left: scrollPositionKKTC,
                    behavior: "smooth",
                });
            });
            prevButtonKKTC.addEventListener("click", () => {
                scrollPositionKKTC -= scrollAmountKKTC;
                if (scrollPositionKKTC < 0) {
                    scrollPositionKKTC = 0;
                }
                productContainerKKTC.scrollTo({
                    left: scrollPositionKKTC,
                    behavior: "smooth",
                });
            });
        }
    }
    catch (error) {
        console.error("Lỗi khi lấy dữ liệu khoảnh khắc thú cưng:", error);
    }
};
class FooterManager {
    statsElement;
    copyrightElement;
    socialIcons;
    constructor() {
        this.statsElement = document.querySelector('.copyright p:first-child');
        this.copyrightElement = document.querySelector('.copyright p:last-child');
        this.socialIcons = document.querySelectorAll('.social-icon');
        this.initFooter();
    }
    initFooter() {
        this.updateStats();
        this.updateCopyrightYear();
        this.addSocialIconsEventListeners();
        setInterval(() => this.updateStats(), 60000);
    }
    updateStats() {
        const stats = {
            onlineUsers: Math.floor(Math.random() * 50) + 1,
            totalViews: 1651779,
            totalStats: 19502
        };
        if (this.statsElement) {
            this.statsElement.textContent =
                `Đang online: ${stats.onlineUsers} | Thống: ${stats.totalStats} | Tổng truy cập: ${stats.totalViews}`;
        }
    }
    updateCopyrightYear() {
        const currentYear = new Date().getFullYear();
        if (this.copyrightElement) {
            this.copyrightElement.textContent =
                `${currentYear} Copyright © PET STATION. All rights reserved.`;
        }
    }
    addSocialIconsEventListeners() {
        this.socialIcons.forEach(icon => {
            icon.addEventListener('click', (e) => this.handleSocialIconClick(e));
        });
    }
    handleSocialIconClick(e) {
        e.preventDefault();
        const target = e.currentTarget;
        const socialNetwork = target.querySelector('i')?.className.split('-')[1];
        if (socialNetwork) {
            console.log(`Clicked on ${socialNetwork} icon`);
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    bossAnNgon();
    BossThoiThuong();
    BossGiauCo();
    BossXinhDep();
    KhoanKhacThuCung();
    laySanPhamBanChay();
    new FooterManager();
});
