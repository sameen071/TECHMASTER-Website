document.addEventListener('DOMContentLoaded', () => {
    const products = window.DataStore ? window.DataStore.getProducts() : [];
    const tbody = document.getElementById('product-tbody');

    const modal = document.getElementById('product-modal');
    const form = document.getElementById('product-form');
    let editingId = null;

    // Render Table
    function renderTable() {
        tbody.innerHTML = '';
        products.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><img src="${p.image}" alt="${p.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;"></td>
                <td><strong>${p.name}</strong><br><small style="color:var(--text-secondary)">${p.condition}</small></td>
                <td><span style="color: var(--primary-color)">${p.category}</span></td>
                <td>${new Intl.NumberFormat('en-LK').format(p.price)}</td>
                <td>
                    <span class="${p.stockStatus === 'In Stock' ? 'in-stock' : 'out-of-stock'}">
                        ${p.stockStatus}
                    </span>
                </td>
                <td>
                    <button class="action-btn btn-edit" data-id="${p.id}" title="Edit"><i class='bx bx-edit'></i></button>
                    <button class="action-btn btn-delete" data-id="${p.id}" style="color: var(--danger)" title="Delete"><i class='bx bx-trash'></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        // Attach event listeners for edit and delete
        document.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', (e) => openModal(e.currentTarget.dataset.id));
        });

        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => deleteProduct(e.currentTarget.dataset.id));
        });
    }

    // Initialize View
    renderTable();

    // Modal Logic
    document.getElementById('btn-add-product').addEventListener('click', () => openModal());
    document.getElementById('btn-close-modal').addEventListener('click', closeModal);

    function openModal(id = null) {
        editingId = id;
        form.reset();

        if (id) {
            document.getElementById('modal-title').innerText = 'Edit Product';
            const p = products.find(x => x.id === id);
            if (p) {
                document.getElementById('product-id').value = p.id;
                document.getElementById('product-name').value = p.name;
                document.getElementById('product-brand').value = p.brand;
                document.getElementById('product-category').value = p.category;
                document.getElementById('product-price').value = p.price;
                document.getElementById('product-condition').value = p.condition;
                document.getElementById('product-warranty').value = p.warranty;
                document.getElementById('product-stock').value = p.stockStatus;
                document.getElementById('product-image').value = p.image;
            }
        } else {
            document.getElementById('modal-title').innerText = 'Add New Product';
        }

        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
        editingId = null;
    }

    // CRUD Logic
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const p = {
            id: editingId || 'P' + Date.now().toString().slice(-4), // Generate simple id
            name: document.getElementById('product-name').value,
            brand: document.getElementById('product-brand').value,
            category: document.getElementById('product-category').value,
            price: parseInt(document.getElementById('product-price').value),
            condition: document.getElementById('product-condition').value,
            warranty: document.getElementById('product-warranty').value,
            stockStatus: document.getElementById('product-stock').value,
            image: document.getElementById('product-image').value
        };

        if (editingId) {
            const index = products.findIndex(x => x.id === editingId);
            if (index !== -1) products[index] = p;
        } else {
            products.unshift(p);
        }

        window.DataStore.saveProducts(products);
        renderTable();
        closeModal();
    });

    function deleteProduct(id) {
        if (confirm('Are you sure you want to delete this product?')) {
            const index = products.findIndex(x => x.id === id);
            if (index !== -1) {
                products.splice(index, 1);
                window.DataStore.saveProducts(products);
                renderTable();
            }
        }
    }
});
