function fmtUnit(p){
  if(p.unit === "KG") return "€/Kg";
  if(p.unit === "L") return "€/L";
  return "€/un";
}

function renderProducts(list){
  const root = document.getElementById("products");
  if(!root) return;

  root.innerHTML = list.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.name}" class="cardImg" />
      <div class="name">${p.name}</div>
      <div class="desc">${p.desc || ""}</div>

      <div class="priceRow">
        <div>
          <div><strong>${Number(p.price).toFixed(2)} €</strong> <span class="small">${fmtUnit(p)}</span></div>
          ${p.unit === "L" ? `<div class="small">Pack: ${p.packSize}L (garrafão)</div>` : ``}
        </div>
        <button class="btn primary" data-id="${p.id}">Adicionar</button>
      </div>
    </article>
  `).join("");

  root.querySelectorAll("button[data-id]").forEach(btn=>{
    btn.addEventListener("click", ()=> addToCart(btn.dataset.id));
  });
}

function addToCart(id){
  const p = PRODUTOS.find(x=>x.id===id);
  if(!p) return;

  const cart = getCart();
  const existing = cart.find(i=>i.id===id);

  if(p.unit === "L"){
    const liters = p.packSize; // 1 garrafão
    if(existing){
      existing.qty = Number(existing.qty) + liters;
    }else{
      cart.push({id:p.id, name:p.name, price:p.price, qty:liters, unit:"L", packSize:p.packSize});
    }
  } else if(p.unit === "KG"){
    const addKg = 1;
    if(existing){
      existing.qty = Number(existing.qty) + addKg;
    }else{
      cart.push({id:p.id, name:p.name, price:p.price, qty:addKg, unit:"KG"});
    }
  } else {
    const addUn = 1;
    if(existing){
      existing.qty = Number(existing.qty) + addUn;
    }else{
      cart.push({id:p.id, name:p.name, price:p.price, qty:addUn, unit:"UN"});
    }
  }

  setCart(cart);
  updateHeader();
}

function filterProducts(q){
  q = (q||"").toLowerCase().trim();
  if(!q) return PRODUTOS;

  return PRODUTOS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    (p.desc||"").toLowerCase().includes(q)
  );
}

// Render inicial na loja
if(document.getElementById("products")){
  const params = new URLSearchParams(location.search);
  const q = params.get("q") || "";
  renderProducts(filterProducts(q));

  const search = document.getElementById("search");
  if(search){
    search.addEventListener("input", e => {
      renderProducts(filterProducts(e.target.value));
    });
  }
}
