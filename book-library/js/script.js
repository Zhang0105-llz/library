// Book data
const books = [
  { id: 1, title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008, description: "Classic JavaScript book focusing on the best parts of the language." },
  { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2011, description: "Interactive introduction to JavaScript programming and web development." },
  { id: 3, title: "Clean Code", author: "Robert Martin", year: 2008, description: "A handbook of agile software craftsmanship, emphasizing clean code principles." },
  { id: 4, title: "You Don't Know JS", author: "Kyle Simpson", year: 2014, description: "In-depth exploration of core JavaScript concepts and mechanisms." },
  { id: 5, title: "Design Patterns", author: "GoF", year: 1994, description: "Collection of software design patterns for object-oriented design." },
  { id: 6, title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999, description: "Essential tips and practices for software developers." },
  { id: 7, title: "Refactoring", author: "Martin Fowler", year: 1999, description: "Improving the design of existing code without changing its behavior." },
  { id: 8, title: "Head First Design Patterns", author: "Eric Freeman", year: 2004, description: "Beginner-friendly guide to common design patterns using Java examples." }
];

// --- Utility: Get book by ID ---
function getBookById(id) {
  const numId = parseInt(id, 10);
  return books.find(book => book.id === numId);
}

// --- Utility: Render book list ---
function renderBooks(bookList) {
  const bookListEl = document.getElementById("bookList");
  bookListEl.innerHTML = "";

  bookList.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <div class="book-info">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.year}</p>
      </div>
    `;

    // Wrap with anchor tag for navigation
    const link = document.createElement("a");
    link.href = `book-detail.html?id=${book.id}`;
    link.className = "book-card-link";
    link.appendChild(card);

    bookListEl.appendChild(link);
  });

  renderPagination(bookList.length);
}

// --- Utility: Render pagination buttons ---
function renderPagination(totalItems) {
  const paginationEl = document.getElementById("pagination");
  paginationEl.innerHTML = "";

  const itemsPerPage = 3;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === currentPage ? "active" : "";
    btn.onclick = () => {
      currentPage = i;
      filterAndRender();
    };
    paginationEl.appendChild(btn);
  }
}

// --- Global: Current page for pagination ---
let currentPage = 1;
const itemsPerPage = 3;

// --- Main: Filter, Sort, Paginate, Render ---
function filterAndRender() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const sortKey = document.getElementById("sortSelect").value;
  const yearMin = document.getElementById("yearFilter").value;

  let filtered = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(query) ||
                         book.author.toLowerCase().includes(query);
    const matchesYear = !yearMin || book.year >= parseInt(yearMin, 10);
    return matchesSearch && matchesYear;
  });

  // Sorting
  filtered.sort((a, b) => {
    switch (sortKey) {
      case "title-asc": return a.title.localeCompare(b.title);
      case "title-desc": return b.title.localeCompare(a.title);
      case "year-asc": return a.year - b.year;
      case "year-desc": return b.year - a.year;
      default: return 0;
    }
  });

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);
  renderBooks(paginatedItems);
}

// --- Event Listeners ---
document.getElementById("searchInput").addEventListener("input", filterAndRender);
document.getElementById("sortSelect").addEventListener("change", filterAndRender);
document.getElementById("yearFilter").addEventListener("input", filterAndRender);

// --- Initial Render ---
filterAndRender();