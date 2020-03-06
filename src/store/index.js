import { createStore } from 'redux';

const INITIAL_STATE = {
    text: '',
}

function teste(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.value,
            }
        default:
            return state;
    }
}

export default createStore(teste);