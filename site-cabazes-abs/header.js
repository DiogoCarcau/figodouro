function getCart(){
  try { return JSON.parse(localStorage.getItem("cart") || "[]"); }
  catch(e){ return []; }
}

function setCart(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function cartTotal(cart){
  return cart.reduce((a,i)=> a + (Number(i.price) * Number(i.qty)), 0);
}

function updateHeader(){
  const cart = getCart();
  const countEl = document.getElementById("cartCount");
  const totalEl = document.getElementById("cartTotal");

  if(countEl) countEl.textContent = cart.length; // itens distintos
  if(totalEl) totalEl.textContent = cartTotal(cart).toFixed(2);
}

function wireGlobalSearch(){
  const input = document.getElementById("search");
  if(!input) return;

  const here = (location.pathname.split("/").pop() || "").toLowerCase();
  const isShop = here === "shop.html" || here === "" && document.getElementById("products");

  // se vier query ?q=, pré-preenche
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  if(q && input) input.value = q;

  input.addEventListener("keydown", (e)=>{
    if(e.key !== "Enter") return;
    const v = (input.value || "").trim();
    if(!v) return;

    if(isShop){
      // app.js já faz filtro no input
      return;
    }
    location.href = `shop.html?q=${encodeURIComponent(v)}`;
  });
}

updateHeader();
wireGlobalSearch();
window.addEventListener("storage", updateHeader);
