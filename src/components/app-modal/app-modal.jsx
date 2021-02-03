import React, {useState, useEffect} from 'react';

import {setRenderFunction} from '../../containers/hocs';

import './app-modal.scss';

const AppModal = ({unmountModal, defaultCurrency, overallList, children, changeDefaultCurrency}) => {
    const [chosenCurrencyId, selectCurrencyId] = useState(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => document.body.style.overflow = 'auto';
    }, []);

    const saveChanges = () => {
        const currency = overallList.find(item => item.id === chosenCurrencyId);

        if (currency) {
            changeDefaultCurrency(currency);
            unmountModal();
        }
    };

    return (
        <div className='app-modal modal-overlay'>
            <div className='app-modal__body rounded-lg px-4 py-2'>
                <h2 className='text-center'>Change default currency</h2>
                <h3 className='text-primary text-center mt-4'>{defaultCurrency.text}</h3>
                <select className="custom-select custom-select-lg mb-3"
                        onChange={(e) => selectCurrencyId(+e.target.value)}>
                    <option value=''>Select Currency</option>
                    {overallList.map(children)}
                </select>
                <div className="control__buttons d-flex justify-content-between">
                    <button disabled={!chosenCurrencyId}
                            className={`btn btn-success w-25`}
                            onClick={saveChanges}>
                        Save
                    </button>
                    <button className='btn btn-danger w-25'
                            onClick={unmountModal}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const renderFunction = item => <option key={item.id} value={item.id}>{item.abbr}: {item.text}</option>;

export default setRenderFunction(renderFunction)(AppModal);