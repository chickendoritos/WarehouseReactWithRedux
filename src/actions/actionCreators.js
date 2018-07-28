// increment
export function updateItem(sectionId, index, name, description, count) {
      console.log(name);
    return {
      type: 'UPDATE_ITEM',
      sectionId,
      index,
      name,
      description,
      count
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
  