document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 6;
  const items = Array.from(document.querySelectorAll(".item"));
  const pagination = document.getElementById("pagination");
  if (!pagination) return;

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  let currentPage = 1;

  function showPage(page) {
    currentPage = Math.min(Math.max(1, page), totalPages);

    items.forEach((item, index) => {
      item.style.display =
        index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage
          ? "block"
          : "none";
    });

    // Atualiza os estilos dos botões
    const pageButtons = pagination.querySelectorAll(".page-btn");
    pageButtons.forEach(btn => btn.classList.remove("active"));
    const active = pagination.querySelector(`#page${currentPage}`);
    if (active) active.classList.add("active");

    // desabilita/ativa prev/next
    const prevBtn = pagination.querySelector(".prev-btn");
    const nextBtn = pagination.querySelector(".next-btn");
    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
  }

  // Gera um botão numérico
  function createPageButton(n) {
    const btn = document.createElement("button");
    btn.className = "page-btn";
    btn.id = "page" + n;
    btn.type = "button";
    btn.innerText = String(n);
    btn.addEventListener("click", () => {
      showPage(n);
      renderPagination(); // re-render para atualizar "..."
    });
    return btn;
  }

  // Renderiza a paginação com "..." quando necessário
  function renderPagination() {
    pagination.innerHTML = "";

    if (totalPages <= 1) {
      pagination.style.display = "none";
      return;
    } else {
      pagination.style.display = "flex";
    }

    // Prev
    const prev = document.createElement("button");
    prev.type = "button";
    prev.className = "prev-btn";
    prev.innerText = "❮";
    prev.addEventListener("click", () => {
      if (currentPage > 1) {
        showPage(currentPage - 1);
        renderPagination();
      }
    });
    pagination.appendChild(prev);

    // Lógica de botões com elipses:
    // sempre mostra 1 e last, e um bloco ao redor de currentPage
    const delta = 1; // quantos números ao redor do current mostrado
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    // botão 1
    pagination.appendChild(createPageButton(1));

    // elipse depois do 1 (se necessário)
    if (left > 2) {
      const dots = document.createElement("span");
      dots.className = "dots";
      dots.innerText = "...";
      pagination.appendChild(dots);
    }

    // páginas do meio
    for (let i = left; i <= right; i++) {
      pagination.appendChild(createPageButton(i));
    }

    // elipse antes do último (se necessário)
    if (right < totalPages - 1) {
      const dots2 = document.createElement("span");
      dots2.className = "dots";
      dots2.innerText = "...";
      pagination.appendChild(dots2);
    }

    // botão último (se houver mais de 1)
    if (totalPages > 1) {
      pagination.appendChild(createPageButton(totalPages));
    }

    // Next
    const next = document.createElement("button");
    next.type = "button";
    next.className = "next-btn";
    next.innerText = "❯";
    next.addEventListener("click", () => {
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
        renderPagination();
      }
    });
    pagination.appendChild(next);

    // Define active e estado inicial (Prev/Next)
    showPage(currentPage);
  }

  // inicializa
  renderPagination();
});