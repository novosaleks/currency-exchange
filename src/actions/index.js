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
    };
};

const setFormRatio = (selectId, currencyRatio) => {
    const payload = {
        typeRating: selectId === 'firstSelect' ? 'firstCurrencyRatio' : 'secondCurrencyRatio',
        currencyRatio,
    };

    return {
        type: 'SET_CURRENCY_RATIO',
        payload,
    };
};

const changeDefaultCurrency = payload => ({
    type: 'CHANGE_DEFAULT_CURRENCY',
    payload
});

export {
    fetchCurrencies,
    addToFavorite,
    removeFromFavorite,
    setFormRatio,
    changeDefaultCurrency
};