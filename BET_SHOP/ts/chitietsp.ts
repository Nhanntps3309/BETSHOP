interface BossAnNgonCT {
    id: string;
    ten_boss: string;
    slug: string;
    mo_ta: string;
    gia: string;
    hinh: string;
    ngay: string;
    thuong_hieu: string;
    xuat_xu: string;
    trong_luong: string;
    so_luong: string;
}

const URL_API_BOSS_CTSP = 'http://localhost:4000/ct_boss_an_ngon';

const loadProductDetail = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        try {
            const response = await fetch(`${URL_API_BOSS_CTSP}/${productId}`);
            const product: BossAnNgonCT = await response.json();

            const productDetailElement = document.getElementById('product-detail');
            if (productDetailElement) {
                productDetailElement.innerHTML = `
                    <img src="${product.hinh}" alt="${product.ten_boss}" class="product-image">
                    <h2 class="product-title">${product.ten_boss}</h2>
                    <p class="product-price">${Number(product.gia).toLocaleString('vi-VN')} VNĐ</p>
                    <p class="product-description">${product.mo_ta}</p>
                    <div class="product-info">
                        <h3>Thông tin sản phẩm</h3>
                        <p><strong>Thương hiệu:</strong> ${product.thuong_hieu}</p>
                        <p><strong>Xuất xứ:</strong> ${product.xuat_xu}</p>
                        <p><strong>Trọng lượng:</strong> ${product.trong_luong}</p>
                        <p><strong>Số lượng:</strong> ${product.so_luong}</p>
                        <p><strong>Ngày cập nhật:</strong> ${new Date(product.ngay).toLocaleDateString('vi-VN')}</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error("Lỗi khi tải chi tiết sản phẩm:", error);
            const productDetailElement = document.getElementById('product-detail');
            if (productDetailElement) {
                productDetailElement.innerHTML = '<p>Có lỗi xảy ra khi tải thông tin sản phẩm. Vui lòng thử lại sau.</p>';
            }
        }
    } else {
        const productDetailElement = document.getElementById('product-detail');
        if (productDetailElement) {
            productDetailElement.innerHTML = '<p>Không tìm thấy thông tin sản phẩm.</p>';
        }
    }
};

document.addEventListener('DOMContentLoaded', loadProductDetail);