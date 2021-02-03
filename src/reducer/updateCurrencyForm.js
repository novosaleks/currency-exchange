const updateCurrencyForm = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENCY_RATIO': {
            const {typeRating, currencyRatio} = action.payload;

            return {
                ...state,
                [typeRating]: currencyRatio
            };
        }

        default:
            return state;
    }
};

export default updateCurrencyForm;