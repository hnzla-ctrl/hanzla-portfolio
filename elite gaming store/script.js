// ===== PRODUCTS =====
const products = [
  { id: 1, title: "Alienware 240Hz Gaming Monitor", category: "monitors", price: 349.99, image: "https://microless.com/cdn/products/b1d11ea8622762683b1168e51a40cd51-md.jpg" },
  { id: 2, title: "SteelSeries Apex Pro Keyboard", category: "keyboards", price: 199.99, image: "https://tpucdn.com/review/steelseries-apex-pro-keyboard/images/title.jpg" },
  { id: 3, title: "Logitech G502 Gaming Mouse", category: "mouse", price: 79.99, image: "https://generations.com.pk/wp-content/uploads/2023/11/G502.jpg" },
  { id: 4, title: "HyperX Cloud II Headset", category: "headphones", price: 99.99, image: "https://static-01.daraz.pk/p/fb40edfbeef8ca4e8343111a5de9a498.jpg" },
  { id: 5, title: "ASUS ROG Swift PG259QN", category: "monitors", price: 699.99, image: "https://i0.wp.com/playtech.pk/wp-content/uploads/2022/03/eb7e44ee0a088155ab8c7191d62518bd.jpg" },
  { id: 6, title: "Corsair K95 RGB Platinum", category: "keyboards", price: 179.99, image: "https://pcper.com/wp-content/uploads/2020/01/corsair-k95-rgb-platinum-xt-featured.jpg" },
  { id: 7, title: "Razer DeathAdder V2", category: "mouse", price: 69.99, image: "https://assets2.razerzone.com/images/pnx.assets/7257c4132da98a3667632a86ac9a6a65/razer-deathadder-v2-hero-mobile.jpg" },
  { id: 8, title: "Bose QuietComfort Gaming Headset", category: "headphones", price: 249.99, image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/21885337/boseqc35iigame.jpg?quality=90&strip=all&crop=0,0,100,100" },
  { id: 100, title: "NVIDIA RTX 4090 Graphics Card", category: "components", price: 1599.99, image: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg" },
  { id: 102, title: "Corsair iCUE H150i Elite Cooler", category: "components", price: 219.99, image: "https://wise-tech.com.pk/wp-content/uploads/2023/11/iCUE-H150i-ELITE-CAPELLIX-XT-Liquid-CPU-Cooler-1.png.webp" },
  { id: 103, title: "G.Skill Trident Z5 RGB 32GB DDR5", category: "components", price: 159.99, image: "https://www.gskill.com/_upload/images/2110201626450.png" },
  { id: 104, title: "Samsung 990 PRO NVMe SSD 2TB", category: "components", price: 199.99, image: "https://pcper.com/wp-content/uploads/2022/10/samsung-990-pro-2tb-ssd-featured.jpg" },
  { id: 104, title: "Attack Shark X3 Max Wireless mouse", category: "mouse", price: 64.99, image: "https://attackshark.com/cdn/shop/files/2_015acad6-35e0-4a6a-b20e-13017cdf56cf.jpg?v=1725699857&width=1600" },
  { id: 104, title: "MSI Vigor GK41 Gaming Keyboard", category: "keyboards", price: 119.99, image: "https://geekawhat.com/wp-content/uploads/2023/10/MSI-Vigor-GK41-Review-Feature-Image.jpg" },
  { id: 104, title: "Logitech Astro a50 x Gaming Headset", category: "headphones", price: 398.99, image: "https://i.ytimg.com/vi/I74XhvkS6Do/maxresdefault.jpg" },
  { id: 104, title: "Samsung Odyssey G7 240Hz Gaming Monitor", category: "monitors", price: 824.99, image: "https://cdn.mos.cms.futurecdn.net/6ceD9WMbvQ8CAQQRpeNCbZ.jpg" },

];

// ===== RENDER PRODUCTS =====
const container = document.getElementById("products-container");
function renderProducts(productsToRender = products) {
  container.innerHTML = '';
  productsToRender.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="product-info">
        <h3>${p.title}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
    container.appendChild(div);
  });
}
renderProducts();

// ===== CART =====
let cart = [];
function addToCart(id) {
  const prod = products.find(p => p.id === id);
  if (prod) {
    const existing = cart.find(c => c.id === id);
    if (existing) { existing.qty += 1; } else { cart.push({ ...prod, qty: 1 }); }
    updateCart();
  }
}
function updateCart() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  const count = document.getElementById("cart-count");
  list.innerHTML = '';
  let t = 0;
  cart.forEach(item => {
    t += item.price * item.qty;
    const li = document.createElement("li");
    li.innerHTML = `${item.title} x${item.qty} <span>$${(item.price * item.qty).toFixed(2)}</span> <button onclick="removeFromCart(${item.id})">x</button>`;
    list.appendChild(li);
  });
  total.innerText = t.toFixed(2);
  count.innerText = cart.reduce((a, b) => a + b.qty, 0);
}
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCart();
}

// ===== CART MODAL =====
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
cartBtn.addEventListener("click", () => { cartModal.classList.remove("hidden"); });
closeCart.addEventListener("click", () => { cartModal.classList.add("hidden"); });

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ===== DROPDOWN =====
const dropdownBtn = document.getElementById("dropdown-btn");
const dropdown = document.querySelector(".dropdown");
dropdownBtn.addEventListener("click", () => { dropdown.classList.toggle("active"); });

// ===== MOBILE MENU =====
const hamburger = document.getElementById("hamburger");
const mobileDropdown = document.getElementById("mobileDropdown");
hamburger.addEventListener("click", () => {
  mobileDropdown.classList.toggle("hidden");
});

// ===== CATEGORY FILTER =====
const categoryLinks = document.querySelectorAll('.desktop-menu a, .mobile-dropdown a');
categoryLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const category = link.textContent.trim().toLowerCase();

    if(category === 'all') {
      renderProducts();
    } else {
      const filtered = products.filter(p => p.category === category);
      renderProducts(filtered);
    }

    // Close mobile dropdown after selection
    if(!mobileDropdown.classList.contains('hidden')){
      mobileDropdown.classList.add('hidden');
    }
  });
});
