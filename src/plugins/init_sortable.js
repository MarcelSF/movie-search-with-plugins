import Sortable from 'sortablejs';

const initSortable = () => {

  const list = document.querySelector('#results');
  Sortable.create(list, {
  ghostClass: "ghost",
  animation: 150,
  onEnd: (event) => {
    alert(`${event.oldIndex} moved to ${event.newIndex}`);
  }
});

};

export { initSortable };
