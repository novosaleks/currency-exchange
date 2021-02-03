import updateCurrencyList from './updateCurrencyList';
import updateCurrencyForm from './updateCurrencyForm';

const initialState = {
    currencyList: {
        defaultCurrency: {text: 'Українська гривня'},
        overallList: [],
    },

    currencyForm: {
        firstCurrencyRatio: 0,
        secondCurrencyRatio: 0,
    }
};

const reducer = (state = initialState, action) => {
    return {
        currencyList: updateCurrencyList(state.currencyList, action),
        currencyForm: updateCurrencyForm(state.currencyForm, action)
    };
};

export default reducer;