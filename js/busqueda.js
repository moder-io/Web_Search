const inputSearch = document.getElementById('searchInput');
const searchLink = document.getElementById('searchLink');

if (inputSearch && searchLink) {
  inputSearch.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const q = inputSearch.value.trim();
      if (!q) return;
      searchLink.href = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
      searchLink.click();
    }
  });
}
