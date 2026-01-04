(function(){
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "azeite";

  const p = PRODUCT_PAGES[id];
  if(!p){
    location.href = "index.html#produtos";
    return;
  }

  document.title = `FigoDouro — ${p.title}`;
  const img = document.getElementById("pImg");
  img.src = p.img;
  img.alt = p.title;

  document.getElementById("pTitle").textContent = p.title;
  document.getElementById("pSub").textContent = p.subtitle;

  const body = document.getElementById("pBody");
  body.innerHTML = (p.body || []).map(t => `<p>${t}</p>`).join("");

  const bullets = document.getElementById("pBullets");
  bullets.innerHTML = (p.bullets || []).map(b => `<li>${b}</li>`).join("");

  document.getElementById("pSizes").textContent = p.sizes || "";

  // ligar "Adicionar ao carrinho" a um produto da loja
  function mapToShopProduct(productPageId){
    if(productPageId === "azeite") return "azeite-5l";   // por defeito, 1 garrafão
    if(productPageId === "figo") return "figo-seco-1kg";
    if(productPageId === "amendoa") return "amendoa-1kg";
    if(productPageId === "noz") return "noz-1kg";
    if(productPageId === "feijao-frade") return "feijao-frade-1kg";
    if(productPageId === "grao-de-bico") return "grao-bico-1kg";
    if(productPageId === "feijocas") return "feijocas-1kg";
    return null;
  }

  const shopId = mapToShopProduct(id);
  const hint = document.getElementById("addHint");
  if(id === "azeite"){
    hint.textContent = "Adiciona 1 garrafão (5L) ao carrinho.";
  }else{
    hint.textContent = "Adiciona 1Kg ao carrinho.";
  }

  document.getElementById("addBtn").addEventListener("click", ()=>{
    if(!shopId) return;
    addToCart(shopId);
  });
})();