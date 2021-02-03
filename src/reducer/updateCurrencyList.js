import {sortByFavorite} from '../utils';

const updateCurrencyList = (state, action) => {
    switch (action.type) {
        case 'LOADED_CURRENCIES':
            return {
                ...state,
                overallList: sortByFavorite(action.payload),
            };

        case 'ADDED_TO_FAVORITE': {
            const item = state.overallList.find(item => item.id === action.payload),
                idx = state.overallList.findIndex((item) => item.id === action.payload),
                copyItem = JSON.parse(JSON.stringify(item));

            copyItem.favorite = 1;

            const overallList = sortByFavorite([
                copyItem,
                ...state.overallList.slice(0, idx),
                ...state.overallList.slice(idx + 1)
            ]);

            return {
                ...state,
                overallList,
            };
        }

        case 'REMOVE_FROM_FAVORITE': {

            const item = state.overallList.find(item => item.id === action.payload),
                idx = state.overallList.findIndex(item => item.id === action.payload),
                copyItem = JSON.parse(JSON.stringify(item));

            copyItem.favorite = 0;

            const overallList = sortByFavorite([
                ...state.overallList.slice(0, idx),
                ...state.overallList.slice(idx + 1),
                copyItem,
            ]);

            return {
                ...state,
                overallList,
            };
        }

        case 'CHANGE_DEFAULT_CURRENCY': {
            const factor = action.payload.rate,
                changedCurrencies = state.overallList.reduce((acc, item) => {
                    const changedCurrency = {
                        ...item,
                        rate: (item.rate / factor).toFixed(8),
                    };

                    return [...acc, changedCurrency];
                }, []);

            return {
                overallList: changedCurrencies,
                defaultCurrency: action.payload
            };
        }

        default:
            return state;
    }
};

export default updateCurrencyList;