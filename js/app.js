document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scroll & Header effects
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(11, 14, 20, 0.9)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(18, 22, 31, 0.7)';
            header.style.boxShadow = 'none';
        }
    });

    // Fetch Products
    const products = window.DataStore ? window.DataStore.getProducts() : [];

    // Filtering Elements
    const categorySelect = document.getElementById('filter-category');
    const conditionSelect = document.getElementById('filter-condition');
    const searchInput = document.getElementById('search-input');
    const grid = document.getElementById('products-grid');

    // Render Initial Products
    renderProducts(products);

    // Event Listeners for Filters
    if (categorySelect && conditionSelect && searchInput) {
        categorySelect.addEventListener('change', filterProducts);
        conditionSelect.addEventListener('change', filterProducts);
        searchInput.addEventListener('input', filterProducts);
    }

    function filterProducts() {
        const cat = categorySelect.value;
        const cond = conditionSelect.value;
        const query = searchInput.value.toLowerCase();

        const filtered = products.filter(p => {
            const matchCategory = cat === 'all' || p.category === cat;
            const matchCondition = cond === 'all' || p.condition === cond;
            const matchQuery = p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query);
            return matchCategory && matchCondition && matchQuery;
        });

        renderProducts(filtered);
    }

    function renderProducts(items) {
        grid.innerHTML = '';
        if (items.length === 0) {
            grid.innerHTML = '<p style="color:var(--text-secondary); grid-column:1/-1; text-align:center;">No products found matching your criteria.</p>';
            return;
        }

        items.forEach(product => {
            const isNew = product.condition === 'Brand New';
            const isInStock = product.stockStatus === 'In Stock';

            // Format price
            const formattedPrice = new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR' }).format(product.price);

            const whatsappMsg = `Hi Techmaster, I am interested in ${product.name} (${product.condition}) priced at ${formattedPrice}. Is this available?`;
            const whatsappLink = `https://wa.me/94717928904?text=${encodeURIComponent(whatsappMsg)}`;

            const card = document.createElement('div');
            card.className = 'product-card glass-panel';
            card.innerHTML = `
                <div class="product-image-container">
                    <span class="condition-tag ${isNew ? 'tag-new' : 'tag-used'}">${product.condition}</span>
                    <img src="${product.image}" loading="lazy" alt="${product.name}" class="product-image">
                </div>
                
                <div class="product-details">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    
                    <div class="product-meta">
                        <span><i class='bx bx-shield-quarter'></i> ${product.warranty}</span>
                        <span class="stock-status ${isInStock ? 'in-stock' : 'out-of-stock'}">
                            ${product.stockStatus}
                        </span>
                    </div>

                    <div class="product-price">${formattedPrice}</div>
                    
                    <a href="${whatsappLink}" target="_blank" class="btn btn-whatsapp" style="width: 100%; justify-content: center;">
                        <i class='bx bxl-whatsapp' style="font-size: 1.2rem;"></i> Inquiry via WhatsApp
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Tracker Function
    window.checkRepairStatus = function () {
        const input = document.getElementById('job-card-input').value.trim().toUpperCase();
        const resultDiv = document.getElementById('tracker-result');
        const repairs = window.DataStore ? window.DataStore.getRepairs() : {};

        resultDiv.style.display = 'block';

        if (repairs[input]) {
            const data = repairs[input];
            resultDiv.style.borderLeftColor = data.status.includes('Completed') ? 'var(--success)' : (data.status.includes('Pending') ? 'var(--warning)' : 'var(--primary-color)');

            resultDiv.innerHTML = `
                <h3 style="margin-bottom: 0.5rem; color: #fff;">Job ID: ${input}</h3>
                <p><strong>Device:</strong> <span style="color: var(--text-secondary);">${data.device}</span></p>
                <p><strong>Issue:</strong> <span style="color: var(--text-secondary);">${data.issue}</span></p>
                <p><strong>Status:</strong> <span style="color: ${data.status.includes('Completed') ? 'var(--success)' : 'var(--text-primary)'}; font-weight: 600;">${data.status}</span></p>
                ${data.cost ? `<p><strong>Estimated/Final Cost:</strong> <span style="color: var(--warning);">${data.cost}</span></p>` : ''}
                <p style="margin-top:0.5rem; font-size: 0.8rem; color: var(--text-secondary);">Last Updated: ${data.updatedAt}</p>
            `;
        } else {
            resultDiv.style.borderLeftColor = 'var(--danger)';
            resultDiv.innerHTML = `
                <p style="color: var(--danger);">Job Card Not Found. Please check the number and try again. E.g. JOB-5001</p>
            `;
        }
    };
});
