(() => {
  const cfg = window.BUSINESS_CONFIG || {};
  const digits = String(cfg.phoneDigits || "").replace(/\\D/g, "");
  const placeholder = !digits || digits === "525500000000";
  const waBase = placeholder ? "#" : `https://wa.me/${digits}`;
  const makeWa = message => placeholder ? "#" : `${waBase}?text=${encodeURIComponent(message)}`;
  document.querySelectorAll(".js-call").forEach(el => {
    el.href = placeholder ? "#" : `tel:+${digits}`;
    el.addEventListener("click", event => { if (placeholder) { event.preventDefault(); alert("Configura el teléfono real en config.js antes de publicar."); } });
  });
  document.querySelectorAll(".js-whatsapp").forEach(el => {
    el.href = makeWa(cfg.whatsappGreeting || "Hola, necesito información.");
    el.addEventListener("click", event => { if (placeholder) { event.preventDefault(); alert("Configura el número real de WhatsApp en config.js antes de publicar."); } });
  });
  document.querySelectorAll(".js-service-wa").forEach(el => {
    el.href = makeWa(`Hola, necesito información sobre: ${el.dataset.service || "servicio técnico"}. Mi ubicación es: `);
    el.addEventListener("click", event => { if (placeholder) { event.preventDefault(); alert("Configura el número real de WhatsApp en config.js antes de publicar."); } });
  });
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (placeholder) { alert("Configura el número real de WhatsApp en config.js antes de publicar."); return; }
    const d = new FormData(form);
    const message = ["Hola, quiero solicitar un servicio técnico.", `Nombre: ${d.get("name")}`, `Equipo: ${d.get("service")}`, `Falla: ${d.get("problem")}`, `Zona: ${d.get("zone")}`].join("\\n");
    window.open(makeWa(message), "_blank", "noopener,noreferrer");
  });
  const toggle = document.querySelector(".menu-toggle"), nav = document.querySelector(".main-nav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú"); toggle.textContent = open ? "✕" : "☰";
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); toggle?.setAttribute("aria-expanded", "false"); if (toggle) { toggle.textContent = "☰"; toggle.setAttribute("aria-label", "Abrir menú"); } }));
  const year = document.getElementById("year"); if (year) year.textContent = new Date().getFullYear();
})();
