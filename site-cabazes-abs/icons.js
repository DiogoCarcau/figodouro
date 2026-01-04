function iconSvg(name) {
  const common = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  if (name === "search") {
    return `<svg class="icon" viewBox="0 0 24 24" ${common}><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>`;
  }
  if (name === "user") {
    return `<svg class="icon" viewBox="0 0 24 24" ${common}><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
  }
  if (name === "cart") {
    return `<svg class="icon" viewBox="0 0 24 24" ${common}><path d="M6 6h15l-1.5 9h-12z"></path><path d="M6 6l-2-3H2"></path><circle cx="9" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle></svg>`;
  }
  return "";
}
