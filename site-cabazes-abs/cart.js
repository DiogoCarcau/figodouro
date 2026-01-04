function formatUnit(unit) {
  if (unit === "Kg") return "€/Kg";
  if (unit === "L") return "€/L";
  if (unit === "UN") return "€/UN";
  return "";
}

function displayCartQty(i) {
  // Azeite: qty guardada em litros. Mostra também em garrafões.
  if (i.unit === "L" && i.packSize) {
    const litros = Number(i.qty) || 0;
    const garrafoes = litros / Number(i.packSize);
    return `${garrafoes} garrafão(ões) (${litros} L)`;
  }
  return `${Number(i.qty)} ${i.unit}`;
}

function stepFor(i) {
  if (i.unit === "Kg") return 0.25;
  if (i.unit === "L" && i.packSize) return Number(i.packSize); // altera em litros (2 ou 5)
  return 1;
}

function minFor(i) {
  if (i.unit === "Kg") return 0.25;
  if (i.unit === "L" && i.packSize) return Number(i.packSize);
  return 1;
}

function normalizeQty(i, value) {
  let v = Number(value);

  if (!Number.isFinite(v)) v = minFor(i);
  if (v < minFor(i)) v = minFor(i);

  // Azeite: força múltiplos do packSize (em litros)
  if (i.unit === "L" && i.packSize) {
    const ps = Number(i.packSize);
    v = Math.round(v / ps) * ps;
    if (v < ps) v = ps;
  }

  // Kg: arredonda a 2 casas
  if (i.unit === "Kg") v = Math.round(v * 100) / 100;

  // UN: inteiro
  if (i.unit === "UN") v = Math.round(v);

  return v;
}

function renderCart() {
  const cart = getCart();
  const rows = document.getElementById("rows");
  rows.innerHTML = "";

  let total = 0;

  cart.forEach((i, idx) => {
    const sub = Number(i.price) * Number(i.qty);
    total += sub;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <strong>${i.name}</strong>
        <div class="small">${formatUnit(i.unit)}</div>
      </td>

      <td>${Number(i.price).toFixed(2)} ${formatUnit(i.unit)}</td>

      <td style="min-width: 240px;">
        <input
          class="qtyInput"
          data-idx="${idx}"
          type="number"
          min="${minFor(i)}"
          step="${stepFor(i)}"
          value="${Number(i.qty)}"
          style="width: 160px;"
        />
        <div class="small">
          <strong>${displayCartQty(i)}</strong>
        </div>
      </td>

      <td>${sub.toFixed(2)} €</td>

      <td>
        <button class="btn light" data-del="${idx}">Remover</button>
      </td>
    `;

    rows.appendChild(tr);
  });

  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("finalize").disabled = cart.length === 0;

  // atualizar quantidades
  rows.querySelectorAll(".qtyInput").forEach(inp => {
    inp.addEventListener("input", () => {
      const idx = Number(inp.dataset.idx);
      const c = getCart();

      c[idx].qty = normalizeQty(c[idx], inp.value);
      inp.value = c[idx].qty;

      setCart(c);
      renderCart();
    });
  });

  // remover item
  rows.querySelectorAll("[data-del]").forEach(b => {
    b.onclick = () => {
      const idx = Number(b.dataset.del);
      const c = getCart();
      c.splice(idx, 1);
      setCart(c);
      renderCart();
    };
  });
}

// Limpar carrinho
document.getElementById("clear").onclick = () => {
  localStorage.removeItem("cart");
  updateHeader();
  renderCart();
};

// Finalizar compra (simulado)
document.getElementById("finalize").onclick = () => {
  const cart = getCart();
  const total = cart.reduce((a, i) => a + (Number(i.price) * Number(i.qty)), 0);

  const order = {
    id: "ORD-" + Date.now(),
    createdAt: new Date().toISOString(),
    items: cart,
    total
  };

  localStorage.setItem("lastOrder", JSON.stringify(order));
  localStorage.removeItem("cart");
  window.location.href = "success.html";
};

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});
