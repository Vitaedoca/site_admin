// Dados de exemplo (podem vir de uma API futuramente)
const newsData = [
  {
    title: "Nova turnê mundial anunciada para 2024",
    date: "15/01/2024",
    desc: "Artista confirma datas de shows em diversas cidades brasileiras...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Festival de música reúne grandes nomes da indústria",
    date: "12/01/2024",
    desc: "Evento promete ser o maior do ano com lineup incrível...",
    img: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef"
  },
  {
    title: "Lançamento do novo single quebra recordes",
    date: "10/01/2024",
    desc: "Música alcança milhões de streams nas primeiras horas...",
    img: "https://images.unsplash.com/photo-1507878866276-a947ef722fee"
  },
  {
    title: "Entrevista exclusiva com estrela internacional",
    date: "08/01/2024",
    desc: "Conversa revela detalhes inéditos da carreira do artista...",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    title: "Prêmio de melhor álbum do ano",
    date: "05/01/2024",
    desc: "Trabalho é reconhecido pela crítica e público...",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
  },
  {
    title: "Colaboração surpresa entre artistas",
    date: "03/01/2024",
    desc: "Parceria inesperada promete agitar o cenário musical...",
    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"
  },
  {
    title: "Show beneficente arrecada milhões para instituições",
    date: "01/01/2024",
    desc: "Evento solidário emociona o público e bate recordes de doações...",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Produtor revela bastidores de gravação de sucesso",
    date: "30/12/2023",
    desc: "Detalhes inéditos da produção de um dos maiores hits do ano...",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Nova gravadora aposta em artistas independentes",
    date: "28/12/2023",
    desc: "Iniciativa quer dar mais espaço para talentos emergentes...",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  }
];

// ---------- PAGINAÇÃO ----------
const container = document.querySelector(".news-cards");
const itemsPerPage = 6;
let currentPage = 1;

function renderNews() {
  container.innerHTML = ""; // limpa o container

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = newsData.slice(start, end);

  pageItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="news-content">
        <div class="icon-news-date">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-fill" viewBox="0 0 16 16">
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5"/>
          </svg>
          <p class="news-date">${item.date}</p>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a href="#" class="read-more">Ler mais →</a>
      </div>
    `;
    container.appendChild(card);
  });

  updatePaginationButtons();
}

// ---------- CONTROLES DE PÁGINA ----------
function updatePaginationButtons() {
  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  // let paginationHTML = `
  //   <div class="pagination">
  //     <button id="prevBtn" ${currentPage === 1 ? "disabled" : ""}>
  //       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  //         <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
  //       </svg>
  //     Anterior</button>
  //     <span>Página ${currentPage} de ${totalPages}</span>
  //     <button id="nextBtn" ${currentPage === totalPages ? "disabled" : ""}>Próxima 
  //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  //       <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
  //     </svg>
  //     </button>
  //   </div>
  // `;

  // remove paginação antiga, se houver
  const oldPagination = document.querySelector(".pagination");
  if (oldPagination) oldPagination.remove();

  // adiciona depois do container
  container.insertAdjacentHTML("afterend", paginationHTML);

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderNews();
    }
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderNews();
    }
  });
}

renderNews();
