document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll(".top10 a");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const url = this.getAttribute("href");

      openVideoModal(url);
    });
  });

});

function openVideoModal(url) {

  // Criar modal
  const modal = document.createElement("div");
  modal.className = "video-modal";

  modal.innerHTML = `
    <div class="video-modal-content">
      <span class="video-modal-close">&times;</span>
      <iframe src="${url}" allow="autoplay"></iframe>
    </div>
  `;

  document.body.appendChild(modal);

  // Forçar fade-in
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);

  // Fechar ao clicar no X
  modal.querySelector(".video-modal-close").onclick = () => closeModal(modal);

  // Fechar ao clicar fora
  modal.onclick = e => {
    if (e.target === modal) closeModal(modal);
  };
}

function closeModal(modal) {
  modal.classList.remove("active");
  setTimeout(() => modal.remove(), 300); // tempo do fade
}
