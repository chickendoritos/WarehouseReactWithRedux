function postItems(state = [], action) {
    //console.log(action);
    switch (action.type) {
        case 'ADD_ITEM':
            // return the new state with the new comment
            return [...state, {
                name: action.name,
                description: action.description,
                count: action.count
            }];
        case 'UPDATE_ITEM':
            //console.log(action);
            return [
                // from the start to the one we want to delete
                ...state.slice(0, action.index),
                { ...state[action.index],  name: action.name, description: action.description, count: action.count },
                ...state.slice(action.index + 1)
            ]
        case 'REMOVE_ITEM':
            // we need to return the new state without the deleted comment
            return [
                // from the start to the one we want to delete
                ...state.slice(0, action.i),
                // after the deleted one, to the end
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
}

function items(state = [], action) {
    if (typeof action.sectionId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.sectionId]: postItems(state[action.sectionId], action)
        }
    }
    return state;
}

export default items;