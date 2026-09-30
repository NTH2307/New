// Produtos. Preços e prazos são PROVISÓRIOS: confirmar com o fornecedor (Spocket/BigBuy)
// antes de publicar. Trocar `emoji` por `image` quando houver fotos/vídeos reais.
const PRODUCTS = [
  {
    id: "comedouro-lento",
    name: "Comedouro lento anti-engasgo",
    emoji: "🥣",
    price: 21.9,
    ship: "Entrega estimada: a confirmar com o fornecedor",
    desc: "Relevos no fundo que obrigam o cão a comer mais devagar.",
    bullets: ["Ideal para cães que comem depressa", "Fácil de lavar", "Base antiderrapante (confirmar no produto final)"],
    options: ["Pequeno", "Médio", "Grande"]
  },
  {
    id: "tapete-focinho",
    name: "Tapete de focinho (snuffle mat)",
    emoji: "🧶",
    price: 16.9,
    ship: "Entrega estimada: a confirmar com o fornecedor",
    desc: "Esconde petiscos entre as tiras e deixa o cão cheirar e procurar.",
    bullets: ["Estimula o olfato e a concentração", "Lavável", "Serve também para abrandar a refeição"]
  },
  {
    id: "peitoral-anti-puxao",
    name: "Peitoral ajustável anti-puxão",
    emoji: "🦮",
    price: 24.9,
    ship: "Entrega estimada: a confirmar com o fornecedor",
    desc: "Distribui a pressão pelo peito e tem faixas refletoras para passeios ao fim do dia.",
    bullets: ["Ajustável", "Faixas refletoras", "Confirma o tamanho medindo o peito do teu cão"],
    options: ["S", "M", "L", "XL"]
  }
];

const PACK = { id: "pack-refeicao", name: "Pack Refeição Tranquila", items: ["comedouro-lento", "tapete-focinho"], discount: 0.1 };

const eur = n => n.toFixed(2).replace(".", ",") + " €";
const byId = id => PRODUCTS.find(p => p.id === id);

let cart = [];
try { cart = JSON.parse(localStorage.getItem("cart") || "[]"); } catch (e) { cart = []; }
const save = () => { try { localStorage.setItem("cart", JSON.stringify(cart)); } catch (e) {} };

function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="card">
      <div class="card-img">${p.emoji}</div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <ul>${p.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        ${p.options ? `<select id="opt-${p.id}" aria-label="Tamanho">${p.options.map(o => `<option>${o}</option>`).join("")}</select>` : ""}
        <span class="ship">${p.ship}</span>
        <div class="price">${eur(p.price)}</div>
        <button class="btn" data-add="${p.id}">Adicionar ao carrinho</button>
      </div>
    </article>`).join("");
  grid.querySelectorAll("[data-add]").forEach(btn =>
    btn.addEventListener("click", () => {
      const id = btn.dataset.add;
      const sel = document.getElementById("opt-" + id);
      addToCart(id, sel ? sel.value : "");
    }));
}

function packPrices() {
  const base = PACK.items.reduce((s, id) => s + byId(id).price, 0);
  return { base, final: base * (1 - PACK.discount) };
}

function renderPack() {
  const { base, final } = packPrices();
  document.getElementById("packOld").textContent = eur(base);
  document.getElementById("packPrice").textContent = eur(final);
  document.getElementById("packBtn").addEventListener("click", () => {
    const sel = document.getElementById("opt-comedouro-lento");
    PACK.items.forEach(id => addToCart(id, id === "comedouro-lento" && sel ? sel.value : "", true));
    openCart();
  });
}

function addToCart(id, option, silent) {
  const line = cart.find(l => l.id === id && l.option === option);
  if (line) line.qty += 1; else cart.push({ id, option, qty: 1 });
  save(); renderCart();
  if (!silent) openCart();
}

function removeLine(i) { cart.splice(i, 1); save(); renderCart(); }

function cartTotal() {
  let total = cart.reduce((s, l) => s + byId(l.id).price * l.qty, 0);
  // Desconto do pack quando existem ambos os produtos
  const packQty = Math.min(...PACK.items.map(id => cart.filter(l => l.id === id).reduce((s, l) => s + l.qty, 0)));
  if (packQty > 0) total -= packQty * packPrices().base * PACK.discount;
  return total;
}

function renderCart() {
  document.getElementById("cartCount").textContent = cart.reduce((s, l) => s + l.qty, 0);
  const box = document.getElementById("cartItems");
  box.innerHTML = cart.length
    ? cart.map((l, i) => `
      <div class="cart-line">
        <div>${byId(l.id).name} × ${l.qty}${l.option ? `<small>Tamanho: ${l.option}</small>` : ""}</div>
        <div>${eur(byId(l.id).price * l.qty)}<br><button data-rm="${i}">remover</button></div>
      </div>`).join("")
    : "<p>O carrinho está vazio.</p>";
  box.querySelectorAll("[data-rm]").forEach(b => b.addEventListener("click", () => removeLine(+b.dataset.rm)));
  document.getElementById("cartTotal").textContent = eur(cartTotal());
}

const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
function openCart() { drawer.classList.add("open"); overlay.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); }
function closeCart() { drawer.classList.remove("open"); overlay.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); }
document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

// O pagamento real ainda não está ligado. Ligar a Shopify/Stripe Checkout/etc. quando existir conta.
document.getElementById("checkoutBtn").addEventListener("click", () => {
  document.getElementById("checkoutNote").textContent =
    "Pagamento ainda não ligado: falta escolher a plataforma de pagamentos (ex.: Shopify ou Stripe).";
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderPack();
renderCart();
