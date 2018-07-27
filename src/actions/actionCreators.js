// increment
export function updateCountOfItem(index) {
    return {
      type: 'UPDATE_ITEM_COUNT',
      index
    }
  }
  
  // add comment
  export function addItem(sectionId, name, description, count) {
    return {
      type: 'ADD_ITEM',
      sectionId,
      name,
      description,
      count
    }
  }
  
  // remove comment
  
  export function removeItem(sectionId, i) {
    return {
      type: 'REMOVE_ITEM',
      i,
      sectionId
    }
  }
  