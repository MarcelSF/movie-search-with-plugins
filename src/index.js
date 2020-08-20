import { fetchMovies, updateResultsList } from './movie.js'
import { initSortable } from './plugins/init_sortable.js'
import { initMarkdown } from './plugins/init_markdown.js'
import { initSelect2 } from './plugins/init_select2.js'

initSortable();
initMarkdown();
initSelect2();

fetchMovies('lord of the rings'); // on 1st page load

const list = document.querySelector('#results');

const form = document.querySelector('#search-form');
form.addEventListener('submit', updateResultsList);
