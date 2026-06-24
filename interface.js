  /* ── 1. DATOS ─────────────────────────────────────────────── */
  const PRODUCTS = [
    { id:1,  name:'Manzanas Rojas',      category:'Frutas y Verduras', emoji:'🍎', price:890,  desc:'Cosechadas en el Alto Valle de Río Negro. Dulces, crujientes, perfectas para comer o usar en postres.' },
    { id:2,  name:'Tomates Perita',      category:'Frutas y Verduras', emoji:'🍅', price:1200, desc:'Color intenso y sabor concentrado. Ideales para salsas caseras, ensaladas y guisos.' },
    { id:3,  name:'Bananas',             category:'Frutas y Verduras', emoji:'🍌', price:750,  desc:'En su punto justo de maduración. Ricas en potasio y energía natural para arrancar el día.' },
    { id:4,  name:'Espinaca',            category:'Frutas y Verduras', emoji:'🥬', price:650,  desc:'Fresca de huerta local. Ideal para tartas, tortillas y ensaladas. Cosecha del día.' },
    { id:5,  name:'Naranjas Jugo',       category:'Frutas y Verduras', emoji:'🍊', price:980,  desc:'Jugosas y ricas en vitamina C. Perfectas para jugo natural. Procedencia: Entre Ríos.' },
    { id:6,  name:'Lechuga Mantecosa',   category:'Frutas y Verduras', emoji:'🥗', price:500,  desc:'Tierna y fresca, perfecta para ensaladas y hamburguesas. Entregada directo del productor.' },
    { id:7,  name:'Pimiento Rojo',       category:'Frutas y Verduras', emoji:'🫑', price:1100, desc:'Carnosos y brillantes para salteados, asados o rellenos. Cultivo sin agroquímicos.' },
    { id:8,  name:'Leche Entera',        category:'Lácteos',           emoji:'🥛', price:1350, desc:'Leche pasteurizada, fuente natural de calcio y proteínas. Sachet de 1 litro.' },
    { id:9,  name:'Queso Cremoso',       category:'Lácteos',           emoji:'🧀', price:2800, desc:'Pasta blanda ideal para untar. Textura suave y sabor equilibrado. Horma de 400 g.' },
    { id:10, name:'Yogur Natural',        category:'Lácteos',           emoji:'🫙', price:950,  desc:'Descremado, sin azúcar añadida. Alto en proteínas. Pote de 190 g.' },
    { id:11, name:'Manteca',             category:'Lácteos',           emoji:'🧈', price:1900, desc:'Elaborada con crema de leche entera. Ideal para cocinar y repostería. 200 g.' },
    { id:12, name:'Crema de Leche',      category:'Lácteos',           emoji:'🍶', price:1100, desc:'35% de materia grasa. Perfecta para salsas y rellenos. Caja de 200 ml.' },
    { id:13, name:'Asado de Tira',       category:'Carnes',            emoji:'🥩', price:6500, desc:'Corte tradicional argentino para parrilla. Novillo Aberdeen Angus. Precio por kg.' },
    { id:14, name:'Pechuga de Pollo',    category:'Carnes',            emoji:'🍗', price:4200, desc:'Sin hueso ni piel. Ideal para milanesas, al horno o a la plancha. Frescos a diario.' },
    { id:15, name:'Carne Molida',        category:'Carnes',            emoji:'🫙', price:4800, desc:'Molida especial con 20% de grasa. Perfecta para empanadas, hamburguesas y bolognesa.' },
    { id:16, name:'Bondiola de Cerdo',   category:'Carnes',            emoji:'🐷', price:5900, desc:'Corte magro y jugoso. Excelente al horno con papas o a la parrilla. Precio por kg.' },
    { id:17, name:'Pan Lactal',          category:'Panadería',         emoji:'🍞', price:1650, desc:'Suave y esponjoso, ideal para sándwiches y tostadas. Sin conservantes artificiales. 460 g.' },
    { id:18, name:'Medialunas',          category:'Panadería',         emoji:'🥐', price:350,  desc:'Artesanales con manteca real. Hojaldradas y doradas. Horneadas a la mañana. Por unidad.' },
    { id:19, name:'Pan Integral',        category:'Panadería',         emoji:'🫓', price:2100, desc:'Con semillas de girasol, sésamo y lino. Alto en fibra. Horneado diario. 500 g.' },
    { id:20, name:'Facturas Surtidas',   category:'Panadería',         emoji:'🧁', price:1800, desc:'Vigilantes, palmeritas y cañoncitos de dulce de leche. Docena de panadería fresca.' },
    { id:21, name:'Detergente',          category:'Limpieza',          emoji:'🧴', price:1200, desc:'Líquido concentrado para vajilla. Fórmula desengrasante con aloe. 750 ml.' },
    { id:22, name:'Lavandina',           category:'Limpieza',          emoji:'🫧', price:980,  desc:'Concentrada al 55 g/l. Desinfecta, blanquea y elimina olores. Botella de 1 litro.' },
    { id:23, name:'Jabón en Polvo',      category:'Limpieza',          emoji:'🧺', price:3400, desc:'Para ropa blanca y de color. Con tecnología STAIN GUARD. Bolsa de 800 g.' },
    { id:24, name:'Suavizante de Telas', category:'Limpieza',          emoji:'👕', price:2600, desc:'Fragancia floral duradera. Deja la ropa suave y con olor fresco todo el día. 900 ml.' },
    { id:25, name:'Limpiavidrios',       category:'Limpieza',          emoji:'🪟', price:1850, desc:'Limpia vidrios y superficies sin dejar rastros. Fórmula con alcohol. Gatillo 500 ml.' },
  ];

  const DISCOUNT_CODES = {
    'DESCUENTO10': { pct: 0.10, label: '10% de descuento' },
    'ARCOIRIS15':  { pct: 0.15, label: '15% de descuento' },
    'BIENVENIDO5': { pct: 0.05, label: '5% de descuento' },
  };

  const TAX_RATE    = 0.21;
  const PAGE_SIZE   = 8; // productos visibles inicialmente

  /* ── 2. ESTADO ────────────────────────────────────────────── */
  const state = {
    activeFilter: 'Todos',
    searchQuery:  '',
    shownCount:   PAGE_SIZE,
    cart:         [],
    discountCode: null,
    discountPct:  0,
  };

  /* ── 3. HELPERS ───────────────────────────────────────────── */
  const fmt = n =>
    '$' + n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  let toastTimer;
  function showToast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  /* ── 4. FILTROS ───────────────────────────────────────────── */
  function buildFilters() {
    const cats = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];
    const wrap  = document.getElementById('category-filters');
    wrap.innerHTML = '';
    cats.forEach(cat => {
      const btn = document.createElement('button');
      btn.className   = 'filter-btn' + (cat === state.activeFilter ? ' active' : '');
      btn.textContent = cat === 'Todos' ? '🏪 Todos' : cat;
      btn.setAttribute('aria-pressed', String(cat === state.activeFilter));
      btn.addEventListener('click', () => {
        state.activeFilter = cat;
        state.shownCount   = PAGE_SIZE;
        renderCatalog();
      });
      wrap.appendChild(btn);
    });
  }

  /* ── 5. CATÁLOGO ──────────────────────────────────────────── */
  function getFiltered() {
    return PRODUCTS.filter(p => {
      const matchCat  = state.activeFilter === 'Todos' || p.category === state.activeFilter;
      const q         = state.searchQuery.toLowerCase();
      const matchSrch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      return matchCat && matchSrch;
    });
  }

  function createCard(product) {
    const inCart = state.cart.find(i => i.product.id === product.id);
    const art    = document.createElement('article');
    art.className      = 'product-card';
    art.dataset.cardId = product.id;

    art.innerHTML = `
      <div class="card-emoji" aria-hidden="true">${product.emoji}</div>
      <div class="card-body">
        <p class="card-category">${product.category}</p>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-desc">${product.desc}</p>
        <p class="card-price">${fmt(product.price)} / u.</p>
        <button class="card-add-btn${inCart ? ' added' : ''}"
                aria-label="Agregar ${product.name} al carrito"
                data-pid="${product.id}">
          ${inCart ? `✔ En el carrito (${inCart.qty})` : '+ Agregar al carrito'}
        </button>
      </div>`;

    art.querySelector('.card-add-btn').addEventListener('click', () => addToCart(product.id));
    return art;
  }

  function syncCardButton(productId) {
    const btn  = document.querySelector(`.card-add-btn[data-pid="${productId}"]`);
    if (!btn) return;
    const item = state.cart.find(i => i.product.id === productId);
    if (item) {
      btn.textContent = `✔ En el carrito (${item.qty})`;
      btn.classList.add('added');
    } else {
      btn.textContent = '+ Agregar al carrito';
      btn.classList.remove('added');
    }
  }

  function renderCatalog() {
    // Actualizar botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
      const active = btn.textContent.replace(/^🏪\s*/, '') === state.activeFilter ||
                     (state.activeFilter === 'Todos' && btn.textContent.includes('Todos'));
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const filtered  = getFiltered();
    const visible   = filtered.slice(0, state.shownCount);
    const grid      = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');
    const moreWrap  = document.getElementById('show-more-wrap');

    // Limpiar sólo las cards (no el #no-results)
    grid.querySelectorAll('.product-card').forEach(c => c.remove());

    if (filtered.length === 0) {
      noResults.style.display = 'block';
      moreWrap.style.display  = 'none';
      return;
    }
    noResults.style.display = 'none';

    visible.forEach(p => grid.appendChild(createCard(p)));

    const remaining = filtered.length - visible.length;
    moreWrap.style.display = remaining > 0 ? 'block' : 'none';
    document.getElementById('show-more-btn').textContent =
      `Ver ${Math.min(remaining, PAGE_SIZE)} productos más ↓`;
  }

  /* ── 6. CARRITO ───────────────────────────────────────────── */
  function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const existing = state.cart.find(i => i.product.id === productId);
    existing ? existing.qty++ : state.cart.push({ product, qty: 1 });
    updateBadge();
    renderCartPanel();
    syncCardButton(productId);
    showToast(`🛒 ${product.name} agregado`);
  }

  function changeQty(productId, delta) {
    const idx = state.cart.findIndex(i => i.product.id === productId);
    if (idx === -1) return;
    state.cart[idx].qty += delta;
    if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
    updateBadge();
    renderCartPanel();
    syncCardButton(productId);
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.product.id !== productId);
    updateBadge();
    renderCartPanel();
    syncCardButton(productId);
  }

  function updateBadge() {
    const total = state.cart.reduce((s, i) => s + i.qty, 0);
    const badge = document.getElementById('cart-badge');
    badge.textContent = total;
    badge.classList.toggle('visible', total > 0);
  }

  function renderCartPanel() {
    const container = document.getElementById('cart-items');
    container.innerHTML = '';

    if (state.cart.length === 0) {
      container.innerHTML = `<div class="cart-empty"><div class="emoji">🛒</div><p>Tu carrito está vacío.<br>Agregá productos del catálogo.</p></div>`;
      updateTotals();
      document.getElementById('checkout-btn').disabled = true;
      return;
    }

    document.getElementById('checkout-btn').disabled = false;

    state.cart.forEach(({ product, qty }) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <span class="ci-emoji" aria-hidden="true">${product.emoji}</span>
        <div class="ci-info">
          <p class="ci-name">${product.name}</p>
          <p class="ci-price-unit">${fmt(product.price)} / u.</p>
          <div class="ci-qty">
            <button class="qty-btn" data-action="dec" data-id="${product.id}" aria-label="Restar uno de ${product.name}">−</button>
            <span class="qty-val">${qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${product.id}" aria-label="Sumar uno de ${product.name}">+</button>
          </div>
        </div>
        <span class="ci-subtotal">${fmt(product.price * qty)}</span>
        <button class="ci-remove" data-id="${product.id}" aria-label="Eliminar ${product.name}">🗑</button>`;

      div.querySelectorAll('.qty-btn').forEach(btn =>
        btn.addEventListener('click', () =>
          changeQty(parseInt(btn.dataset.id), btn.dataset.action === 'inc' ? 1 : -1)));

      div.querySelector('.ci-remove').addEventListener('click', () =>
        removeFromCart(parseInt(div.querySelector('.ci-remove').dataset.id)));

      container.appendChild(div);
    });

    updateTotals();
  }

  function updateTotals() {
    const subtotal    = state.cart.reduce((s, i) => s + i.product.price * i.qty, 0);
    const discountAmt = subtotal * state.discountPct;
    const afterDisc   = subtotal - discountAmt;
    const tax         = afterDisc * TAX_RATE;
    const total       = afterDisc + tax;

    document.getElementById('subtotal-val').textContent = fmt(subtotal);
    document.getElementById('tax-val').textContent      = fmt(tax);
    document.getElementById('total-val').textContent    = fmt(total);

    const discRow = document.getElementById('discount-row');
    if (state.discountPct > 0 && subtotal > 0) {
      discRow.style.display = 'flex';
      document.getElementById('discount-label').textContent = DISCOUNT_CODES[state.discountCode]?.label || 'Descuento';
      document.getElementById('discount-val').textContent   = `− ${fmt(discountAmt)}`;
    } else {
      discRow.style.display = 'none';
    }
  }

  /* ── 7. PANEL CARRITO (abrir/cerrar) ─────────────────────── */
  function openCart()  {
    document.getElementById('cart-overlay').classList.add('open');
    document.getElementById('cart-panel').classList.add('open');
    document.getElementById('cart-panel').setAttribute('aria-hidden', 'false');
    document.getElementById('close-cart').focus();
  }
  function closeCart() {
    document.getElementById('cart-overlay').classList.remove('open');
    document.getElementById('cart-panel').classList.remove('open');
    document.getElementById('cart-panel').setAttribute('aria-hidden', 'true');
  }

  /* ── 8. DESCUENTO ─────────────────────────────────────────── */
  function applyDiscount() {
    const input = document.getElementById('discount-input');
    const msg   = document.getElementById('discount-msg');
    const code  = input.value.trim().toUpperCase();

    if (!code) { msg.textContent = 'Ingresá un código.'; msg.className = 'err'; return; }

    const promo = DISCOUNT_CODES[code];
    if (promo) {
      state.discountCode = code;
      state.discountPct  = promo.pct;
      msg.textContent    = `✔ Código "${code}" aplicado — ${promo.label}`;
      msg.className      = 'ok';
      input.disabled     = true;
      document.getElementById('apply-discount-btn').disabled = true;
    } else {
      state.discountCode = null;
      state.discountPct  = 0;
      msg.textContent    = '✘ Código inválido. Probá con otro.';
      msg.className      = 'err';
    }
    updateTotals();
  }

  /* ── 9. CHECKOUT ──────────────────────────────────────────── */
  function checkout() {
    showToast('🎉 ¡Pedido enviado! Gracias por comprar en Arcoiris.');
    state.cart         = [];
    state.discountCode = null;
    state.discountPct  = 0;
    const di = document.getElementById('discount-input');
    di.value = ''; di.disabled = false;
    document.getElementById('apply-discount-btn').disabled = false;
    document.getElementById('discount-msg').textContent    = '';
    updateBadge();
    renderCartPanel();
    // sincronizar todas las cards visibles
    document.querySelectorAll('.card-add-btn').forEach(btn => {
      btn.textContent = '+ Agregar al carrito';
      btn.classList.remove('added');
    });
    setTimeout(closeCart, 1600);
  }

  /* ── 10. INIT ─────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    buildFilters();
    renderCatalog();
    renderCartPanel();

    // Búsqueda
    const searchInput = document.getElementById('search-input');
    document.getElementById('search-form').addEventListener('submit', e => {
      e.preventDefault();
      state.searchQuery  = searchInput.value.trim();
      state.activeFilter = 'Todos';
      state.shownCount   = PAGE_SIZE;
      buildFilters();
      renderCatalog();
      document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
    });
    searchInput.addEventListener('input', () => {
      if (!searchInput.value) { state.searchQuery = ''; renderCatalog(); }
    });

    // Carrito
    document.getElementById('cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    document.getElementById('cart-overlay').addEventListener('click', closeCart);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

    // Ver más
    document.getElementById('show-more-btn').addEventListener('click', () => {
      state.shownCount += PAGE_SIZE;
      renderCatalog();
    });

    // Descuento
    document.getElementById('apply-discount-btn').addEventListener('click', applyDiscount);
    document.getElementById('discount-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') applyDiscount();
    });

    // Finalizar compra
    document.getElementById('checkout-btn').addEventListener('click', checkout);

    // Formulario contacto
    document.getElementById('contact-form').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target;
      if (!f.nombre.value.trim() || !f.email.value.trim() || !f.motivo.value || !f.mensaje.value.trim()) {
        showToast('⚠️ Completá todos los campos requeridos.'); return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value)) {
        showToast('⚠️ El email no parece válido.'); return;
      }
      document.getElementById('form-success').style.display = 'block';
      f.reset();
      setTimeout(() => { document.getElementById('form-success').style.display = 'none'; }, 5000);
    });

    // Login demo
    document.getElementById('login-btn').addEventListener('click', () => {
      showToast('🔐 Login próximamente disponible.');
    });
  });