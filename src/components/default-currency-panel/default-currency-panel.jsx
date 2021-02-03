import React, {useState} from 'react';

import {connect} from 'react-redux';

import './default-currency-panel.scss';
import AppModal from '../app-modal';
import PortalComponent from '../../containers/portal-component';

import {changeDefaultCurrency} from '../../actions';

const DefaultCurrencyPanel = ({defaultCurrency, overallList, changeDefaultCurrency}) => {
    const [isModalActive, setModalActive] = useState(false);

    const modalWindow = (
        <PortalComponent id='modal_root'>
            <AppModal defaultCurrency={defaultCurrency}
                      changeDefaultCurrency={changeDefaultCurrency}
                      overallList={overallList}
                      unmountModal={() => setModalActive(false)}/>
        </PortalComponent>
    );

    return (
        <div className='default-currency-panel d-flex justify-content-between rounded px-4 align-items-center'>
            <h2>Your default currency is: <span className='text-primary'>{defaultCurrency.text}</span></h2>

            {isModalActive ? modalWindow : null}

            <button className='btn btn-lg btn-success'
                    onClick={() => setModalActive(true)}>
                Change
            </button>
        </div>
    );
};

const mapStateToProps = ({currencyList: {defaultCurrency, overallList}}) => ({
    defaultCurrency,
    overallList
});

const mapDispatchToProps = {
    changeDefaultCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultCurrencyPanel);