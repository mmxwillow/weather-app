import fetchData from "./fetch-data";

fetchData('warsaw');

const form = document.querySelector('form');
const searchInput = document.querySelector('input');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const searchValue = searchInput.value;
    fetchData(searchValue);
})
