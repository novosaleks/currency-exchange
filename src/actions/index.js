const loadedCurrencies = payload => ({
    type: 'LOADED_CURRENCIES',
    payload,
});

const fetchCurrencies = (dispatch, api) => {
    api.getAllCurrencies()
        .then(r => dispatch(loadedCurrencies(r)));
};

const addToFavorite = payload => {
    return {
        type: 'ADDED_TO_FAVORITE',
        payload,
    };
};

const removeFromFavorite = payload => {
    return {
        type: 'REMOVE_FROM_FAVORITE',
        payload,
    }
}

export {
    fetchCurrencies,
    addToFavorite,
    removeFromFavorite,
};