import {sortByFavorite} from '../utils';

const initialState = {
    currencyList: {
        overallList: [],
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED_CURRENCIES':
            return {
                currencyList: {
                    overallList: sortByFavorite(action.payload),
                }
            };

        case 'ADDED_TO_FAVORITE': {
            const item = state.currencyList.overallList.find(item => item.id === action.payload),
                idx = state.currencyList.overallList.findIndex((item) => item.id === action.payload),
                copyItem = JSON.parse(JSON.stringify(item));

            copyItem.favorite = 1;

            const overallList = sortByFavorite([
                copyItem,
                ...state.currencyList.overallList.slice(0, idx),
                ...state.currencyList.overallList.slice(idx + 1)
            ]);

            return {
                currencyList: {
                    overallList,
                }
            };
        }

        case 'REMOVE_FROM_FAVORITE': {

            const item = state.currencyList.overallList.find(item => item.id === action.payload),
                idx = state.currencyList.overallList.findIndex(item => item.id === action.payload),
                copyItem = JSON.parse(JSON.stringify(item));

            copyItem.favorite = 0;

            const overallList = sortByFavorite([
                ...state.currencyList.overallList.slice(0, idx),
                ...state.currencyList.overallList.slice(idx + 1),
                copyItem,
            ]);

            return {
                currencyList: {
                    overallList,
                }
            };
        }

        default:
            return state;
    }
};

export default reducer;