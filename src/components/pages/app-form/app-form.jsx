import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import './app-form.scss';

import {setFormRatio} from '../../../actions';

const AppForm = ({overallList, firstCurrencyRatio, secondCurrencyRatio, setFormRatio}) => {
    const [firstInputValue, setFirstInputValue] = useState(''),
        [secondInputValue, setSecondInputValue] = useState('');

    const selectionOptions = overallList.map(item => {
        const {id, abbr, text} = item;

        return (
            <option key={id} value={id}>
                {abbr}: {text}
            </option>
        );
    });

    useEffect(() => {

        if (firstCurrencyRatio && secondCurrencyRatio) {
            let newValue;

            if (firstInputValue) {
                newValue = firstInputValue * firstCurrencyRatio / secondCurrencyRatio;
            } else if (secondInputValue) {
                newValue = secondInputValue * secondCurrencyRatio / firstCurrencyRatio;
            } else {
                return;
            }

            setSecondInputValue(newValue.toFixed(2));
        }

    }, [firstCurrencyRatio, secondCurrencyRatio]);

    const onSelectedCurrency = target => {
        const currency = overallList.find(item => {
            return item.id === +target.value;
        });


        if (currency) {
            setFormRatio(target.id, currency.rate);
        } else {
            target.id === 'firstSelect' ? setSecondInputValue(0) : setFirstInputValue(0);
            setFormRatio(target.id, 0);
        }
    };

    const onInputValue = target => {
        if (/[a-zA-Z0-9]\.$/.test(target.value)) {
            target.id === 'firstInput' ? setFirstInputValue(target.value) : setSecondInputValue(target.value);
            return;
        }

        const value = +target.value;

        if (isNaN(value) || target.value.length > 15 || !isFinite(value)) {
            return;
        }

        const isFirstInput = target.id === 'firstInput',
            calculationFactor = isFirstInput ?
                firstCurrencyRatio / secondCurrencyRatio :
                secondCurrencyRatio / firstCurrencyRatio,
            totalValue = (value * calculationFactor).toFixed(2);

        if (firstCurrencyRatio && secondCurrencyRatio) {
            if (isFirstInput) {
                setFirstInputValue(value);
                setSecondInputValue(totalValue);
            } else {
                setFirstInputValue(totalValue);
                setSecondInputValue(value);
            }
        } else if (isFirstInput) {
            setFirstInputValue(value);
        } else {
            setSecondInputValue(value);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12">
                        <form>
                            <div className="mb-3">
                                <select id='firstSelect' className="custom-select mb-1 border-dark"
                                        aria-label="Default select example"
                                        defaultValue='Open this select menu'
                                        onChange={e => onSelectedCurrency(e.target)}>
                                    <option>Choose your currency</option>
                                    {selectionOptions}
                                </select>
                                <input value={firstInputValue}
                                       id='firstInput'
                                       onInput={e => onInputValue(e.target)}
                                       type="text"
                                       className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <select id='secondSelect' className="custom-select mb-1 border-dark"
                                        aria-label="Default select example"
                                        defaultValue='Open this select menu'
                                        onChange={e => onSelectedCurrency(e.target)}>
                                    <option>Choose your currency</option>
                                    {selectionOptions}
                                </select>
                                <input value={secondInputValue}
                                       id='secondInput'
                                       onInput={e => onInputValue(e.target)}
                                       type="text"
                                       className="form-control"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({currencyForm: {firstCurrencyRatio, secondCurrencyRatio}}) => {
    return {
        firstCurrencyRatio,
        secondCurrencyRatio,
    };
};

const mapDispatchToProps = {
    setFormRatio
};

export default connect(mapStateToProps, mapDispatchToProps)(AppForm);