
const tbody = document.querySelector("#questionTable tbody");
const searchInput = document.getElementById("search");

function renderTable(data) {
  tbody.innerHTML = "";
  data.forEach(q => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${q.topic}</td>
      <td>${q.ao}</td>
      <td>${q.paper}</td>
      <td>${q.question}</td>
      <td>${q.page}</td>
    `;
    tbody.appendChild(row);
  });
}

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = questionData.filter(q =>
    q.topic.toLowerCase().includes(term) ||
    q.ao.toLowerCase().includes(term) ||
    q.paper.toLowerCase().includes(term)
  );
  renderTable(filtered);
});

renderTable(questionData);
