let itemList = [];

function addItem(item) {
  itemList.push(item);
}

function clearList() {
  itemList = [];
}

function getList() {
  return itemList;
}

// These functions are intentionally not tested to reduce coverage
function removeItem(item) {
  const index = itemList.indexOf(item);
  if (index > -1) {
    itemList.splice(index, 1);
    return true;
  }
  return false;
}

function getItemCount() {
  return itemList.length;
}

function searchItems(query) {
  if (!query) {
    throw new Error('Search query is required');
  }
  return itemList.filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );
}

function sortItems(ascending = true) {
  if (itemList.length === 0) {
    return [];
  }
  
  const sorted = [...itemList].sort();
  return ascending ? sorted : sorted.reverse();
}

module.exports = {
  addItem,
  clearList,
  getList,
  removeItem,
  getItemCount,
  searchItems,
  sortItems,
};
